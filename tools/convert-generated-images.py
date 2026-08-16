from pathlib import Path
from PIL import Image

ROOT = Path.cwd()
IMAGES = [
    ("assets/img/ai-tools-atlas.png", "assets/img/ai-tools-atlas.webp"),
    ("assets/img/prompt-ebooks-showcase.png", "assets/img/prompt-ebooks-showcase.webp"),
    ("assets/img/ai-comparison-dashboard.png", "assets/img/ai-comparison-dashboard.webp"),
    ("assets/img/ai-learning-visual.png", "assets/img/ai-learning-visual.webp"),
]

for source, target in IMAGES:
    src = ROOT / source
    dst = ROOT / target
    with Image.open(src) as image:
        image = image.convert("RGB")
        if image.width > 1500:
            ratio = 1500 / image.width
            image = image.resize((1500, int(image.height * ratio)), Image.Resampling.LANCZOS)
        image.save(dst, "WEBP", quality=82, method=6)
        print(f"{source} -> {target}: {src.stat().st_size} -> {dst.stat().st_size}")
    src.unlink()
