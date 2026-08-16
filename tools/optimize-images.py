from pathlib import Path
from PIL import Image

ROOT = Path.cwd()
IMAGES = [
    ("assets/img/hero-robot-premium.png", "assets/img/hero-robot-premium.webp", 1400, 82),
    ("assets/img/catalog-atlas.png", "assets/img/catalog-atlas.webp", 1400, 82),
    ("assets/img/learning-lab.png", "assets/img/learning-lab.webp", 1400, 82),
]

for src, dst, max_width, quality in IMAGES:
    src_path = ROOT / src
    dst_path = ROOT / dst
    with Image.open(src_path) as image:
        image = image.convert("RGB")
        if image.width > max_width:
            ratio = max_width / image.width
            size = (max_width, int(image.height * ratio))
            image = image.resize(size, Image.Resampling.LANCZOS)
        image.save(dst_path, "WEBP", quality=quality, method=6)
        before = src_path.stat().st_size
        after = dst_path.stat().st_size
        print(f"{src} -> {dst} {before} -> {after}")
