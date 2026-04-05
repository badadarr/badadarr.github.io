import json
import os

repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
log_path = os.path.join(repo_root, 'data', 'dev-log.json')

with open(log_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for log in data.get('logs', []):
    log['type'] = 'auto'
    log['source'] = 'github-actions'
    log['duration'] = '30m'

with open(log_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
