import os
from PIL import Image

def clean_logo(image_path, output_path):
    print(f"Loading image from: {image_path}")
    if not os.path.exists(image_path):
        print("Error: Image path does not exist.")
        return False
        
    img = Image.open(image_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    # Let's find the background checkerboard colors by sampling the borders
    border_pixels = []
    # Top and bottom borders
    for x in range(width):
        border_pixels.append(pixels[x, 0])
        border_pixels.append(pixels[x, height - 1])
    # Left and right borders
    for y in range(height):
        border_pixels.append(pixels[0, y])
        border_pixels.append(pixels[width - 1, y])
        
    # Find unique colors in borders (with some grouping)
    # We expect two primary background colors from the checkerboard pattern
    from collections import Counter
    # Helper to round color to nearest 10 for grouping
    def color_key(rgba):
        return (rgba[0]//12*12, rgba[1]//12*12, rgba[2]//12*12)
        
    color_counts = Counter(color_key(p) for p in border_pixels)
    most_common = color_counts.most_common(5)
    print("Most common border colors (grouped):", most_common)
    
    # We will treat any color that is close to the most common border colors as background
    bg_groups = [item[0] for item in most_common if item[1] > (len(border_pixels) * 0.05)]
    print("Identified background groups:", bg_groups)
    
    # Let's perform a flood fill from the borders to only remove background
    visited = set()
    queue = []
    
    # Add all border pixels to queue
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
        visited.add((x, 0))
        visited.add((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))
        visited.add((0, y))
        visited.add((width - 1, y))
        
    # Helper to check if a color belongs to background
    def is_bg(rgba):
        r, g, b, a = rgba
        # If already transparent, it is background
        if a < 50:
            return True
        # Check distance to identified background groups
        for bg_r, bg_g, bg_b in bg_groups:
            if abs(r - bg_r) < 30 and abs(g - bg_g) < 30 and abs(b - bg_b) < 30:
                return True
        return False

    bg_coords = set()
    
    # BFS to find all background connected pixels
    while queue:
        cx, cy = queue.pop(0)
        curr_pixel = pixels[cx, cy]
        
        if is_bg(curr_pixel):
            bg_coords.add((cx, cy))
            
            # Check neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    visited.add((nx, ny))
                    queue.append((nx, ny))
                    
    # Now set all identified background pixels to transparent
    for x, y in bg_coords:
        pixels[x, y] = (0, 0, 0, 0)
        
    # Also trim the edges slightly to remove any remaining background halos
    # Let's save the resulting transparent image
    img.save(output_path, "PNG")
    print(f"Successfully cleaned image and saved to: {output_path}")
    return True

if __name__ == "__main__":
    import sys
    # Clean both logo-graphic.png and image copy 8.png if they exist
    public_dir = "e:\\shannu-cab-s\\public"
    
    image_copy_8 = os.path.join(public_dir, "image copy 8.png")
    logo_clean = os.path.join(public_dir, "logo-clean.png")
    
    if os.path.exists(image_copy_8):
        clean_logo(image_copy_8, logo_clean)
    else:
        # Fallback to logo-graphic.png
        logo_graphic = os.path.join(public_dir, "logo-graphic.png")
        if os.path.exists(logo_graphic):
            clean_logo(logo_graphic, logo_clean)
        else:
            print("No source logo image found.")
