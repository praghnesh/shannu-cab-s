import os
from PIL import Image

def clean_and_autocrop_logo(image_path, output_path):
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
    from collections import Counter
    def color_key(rgba):
        return (rgba[0]//12*12, rgba[1]//12*12, rgba[2]//12*12)
        
    color_counts = Counter(color_key(p) for p in border_pixels)
    most_common = color_counts.most_common(5)
    print("Most common border colors (grouped):", most_common)
    
    bg_groups = [item[0] for item in most_common if item[1] > (len(border_pixels) * 0.05)]
    print("Identified background groups:", bg_groups)
    
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
        
    def is_bg(rgba):
        r, g, b, a = rgba
        if a < 50:
            return True
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
            
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    visited.add((nx, ny))
                    queue.append((nx, ny))
                    
    # Now set all identified background pixels to transparent
    for x, y in bg_coords:
        pixels[x, y] = (0, 0, 0, 0)
        
    # AUTOCROP: Trim empty transparent padding from edges
    bbox = img.getbbox()
    if bbox:
        print(f"Original size: {img.size}, Bounding Box of logo: {bbox}")
        # Crop to the bounding box of non-transparent elements
        img = img.crop(bbox)
        print(f"New cropped size: {img.size}")
    else:
        print("Warning: Could not get bounding box for autocrop.")
        
    # Save the resulting transparent image
    img.save(output_path, "PNG")
    print(f"Successfully cleaned & autocropped image and saved to: {output_path}")
    return True

if __name__ == "__main__":
    public_dir = "e:\\shannu-cab-s\\public"
    image_copy_8 = os.path.join(public_dir, "image copy 8.png")
    logo_clean = os.path.join(public_dir, "logo-clean.png")
    
    if os.path.exists(image_copy_8):
        clean_and_autocrop_logo(image_copy_8, logo_clean)
    else:
        logo_graphic = os.path.join(public_dir, "logo-graphic.png")
        if os.path.exists(logo_graphic):
            clean_and_autocrop_logo(logo_graphic, logo_clean)
        else:
            print("No source logo image found.")
