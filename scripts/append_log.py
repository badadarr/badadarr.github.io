#!/usr/bin/env python3
"""
append_log.py
Appends a new daily entry to data/dev-log.json.
Run by GitHub Actions every day.
"""

import json
import os
from datetime import datetime, timezone, timedelta

# ── Constants ────────────────────────────────────────────────────────────────
WIB = timezone(timedelta(hours=7))
DATA_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'dev-log.json')

# Rotating pool of notes — cycles based on total entry count (day index)
NOTES = [
    {"note": "Rapikan struktur folder kecil di project biar lebih gampang dicari.", "tag": "Refactor"},
    {"note": "Baca ulang code sendiri dan ganti nama variabel yang kurang jelas.", "tag": "Clean Code"},
    {"note": "Perbaiki typo di README dan tambah langkah run yang kurang.", "tag": "Documentation"},
    {"note": "Belajar git commit message yang lebih jelas dan konsisten.", "tag": "Git"},
    {"note": "Coba pecah function panjang jadi function kecil biar lebih mudah dibaca.", "tag": "Refactor"},
    {"note": "Tambah validasi input sederhana di form/API biar lebih aman.", "tag": "Backend"},
    {"note": "Perbaiki style UI kecil (spacing, font size, alignment).", "tag": "Frontend"},
    {"note": "Belajar pakai .env dengan benar untuk simpan config.", "tag": "Learning"},
    {"note": "Nambah 1-2 unit test sederhana untuk function penting.", "tag": "Testing"},
    {"note": "Review PR/commit lama untuk lihat pola error yang sering keulang.", "tag": "Reflection"},
    {"note": "Perbaiki handling error biar message ke user lebih jelas.", "tag": "Backend"},
    {"note": "Rapikan import yang tidak dipakai dan bersihkan warning linter.", "tag": "Maintenance"},
    {"note": "Belajar satu konsep JavaScript/Python kecil lalu langsung dipraktikkan di code.", "tag": "Learning"},
    {"note": "Bikin helper function kecil untuk mengurangi duplikasi kode.", "tag": "Refactor"},
    {"note": "Update dokumentasi endpoint/function yang baru diubah.", "tag": "Documentation"},
    {"note": "Perbaiki bug kecil dari hasil testing manual hari ini.", "tag": "Bugfix"},
    {"note": "Coba improve query/proses yang terasa lambat di bagian kecil.", "tag": "Performance"},
    {"note": "Benerin edge case sederhana yang kemarin belum ketangani.", "tag": "Bugfix"},
    {"note": "Belajar shortcut editor/IDE biar kerja harian lebih cepat.", "tag": "Productivity"},
    {"note": "Commit kecil tapi konsisten: progress sedikit tetap progress.", "tag": "Mindset"},
]

# ── Main ─────────────────────────────────────────────────────────────────────
def main():
    today_str = datetime.now(WIB).strftime('%Y-%m-%d')

    # Load existing log
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    logs = data.get('logs', [])

    # Guard: don't add duplicate entry for today
    if logs and logs[-1].get('date') == today_str:
        print(f"Entry for {today_str} already exists. Skipping.")
        return

    day_number = len(logs) + 1
    pool_item = NOTES[(day_number - 1) % len(NOTES)]

    new_entry = {
        "date": today_str,
        "day": day_number,
        "note": pool_item["note"],
        "tag": pool_item["tag"],
    }

    logs.append(new_entry)
    data['logs'] = logs
    data['last_updated'] = today_str
    data['total_days'] = day_number

    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Appended Day {day_number} entry for {today_str}: [{pool_item['tag']}]")


if __name__ == '__main__':
    main()
