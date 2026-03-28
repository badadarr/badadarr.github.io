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
    {"note": "Consistency beats intensity. Showing up every day is the skill.", "tag": "Mindset"},
    {"note": "Reviewed clean code principles — naming things well is an art.", "tag": "Learning"},
    {"note": "Explored new Git workflow strategies for better branch management.", "tag": "Git"},
    {"note": "Practiced writing more readable, self-documenting code.", "tag": "Best Practices"},
    {"note": "Deep-dived into REST API design patterns and idempotency.", "tag": "Backend"},
    {"note": "Studied asynchronous programming concepts in JavaScript.", "tag": "Learning"},
    {"note": "Reviewed database indexing strategies for query optimization.", "tag": "Database"},
    {"note": "Explored Docker containerization for consistent dev environments.", "tag": "DevOps"},
    {"note": "Practiced refactoring — making code better without changing behavior.", "tag": "Best Practices"},
    {"note": "Studied SOLID principles and applied them to a small module.", "tag": "Architecture"},
    {"note": "Reviewed testing strategies — unit vs integration vs e2e.", "tag": "Testing"},
    {"note": "Explored GitHub Actions capabilities for CI/CD automation.", "tag": "DevOps"},
    {"note": "Studied responsive design techniques for mobile-first development.", "tag": "Frontend"},
    {"note": "Practiced algorithmic thinking — solved a data structure challenge.", "tag": "DSA"},
    {"note": "Reviewed security best practices — input sanitisation and CSRF protection.", "tag": "Security"},
    {"note": "Explored caching strategies to improve application performance.", "tag": "Performance"},
    {"note": "Studied design patterns — Factory, Observer, and Strategy.", "tag": "Architecture"},
    {"note": "Reviewed API authentication methods: JWT vs session vs OAuth.", "tag": "Security"},
    {"note": "Practiced writing meaningful commit messages and PR descriptions.", "tag": "Git"},
    {"note": "Reflected on past projects and identified areas for improvement.", "tag": "Reflection"},
    {"note": "Explored WebSockets for real-time communication in web apps.", "tag": "Backend"},
    {"note": "Studied accessibility (a11y) standards for inclusive web design.", "tag": "Frontend"},
    {"note": "Reviewed state management patterns for large-scale frontends.", "tag": "Frontend"},
    {"note": "Practiced code review skills — giving and receiving feedback.", "tag": "Best Practices"},
    {"note": "Explored open-source projects to learn real-world code structure.", "tag": "Learning"},
    {"note": "Studied microservices vs monolith trade-offs for system design.", "tag": "Architecture"},
    {"note": "Reviewed error handling strategies and graceful degradation.", "tag": "Best Practices"},
    {"note": "Practiced profiling and performance debugging techniques.", "tag": "Performance"},
    {"note": "Explored serverless architecture concepts and use-cases.", "tag": "DevOps"},
    {"note": "Stayed consistent. Every commit counts, every day matters.", "tag": "Mindset"},
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
