#!/usr/bin/env python3
"""
append_log.py
Appends a new daily entry to data/dev-log.json.
Run by GitHub Actions every day.

Schedule (WIB):
- Mon–Fri: repo work (NOTES_REPO)
- Sat: learning path (NOTES_LEARNING)
- Sun: reflection/mindset (NOTES_SUNDAY)
"""

import json
import os
from datetime import datetime, timezone, timedelta

# ── Constants ────────────────────────────────────────────────────────────────
WIB = timezone(timedelta(hours=7))
DATA_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'dev-log.json')

# ── Notes Pools ──────────────────────────────────────────────────────────────
# Mon–Fri
NOTES_REPO = [
    {"note": "Rapikan README: tambah cara setup .env, migrate, dan akun demo (kalau ada).", "tag": "Documentation"},
    {"note": "Benerin typo dan konsistensi bahasa di halaman Blade (judul, tombol, placeholder).", "tag": "UI"},
    {"note": "Refactor Blade: pecah layout jadi partial (navbar/sidebar/footer) biar rapi.", "tag": "Refactor"},
    {"note": "Rapikan struktur folder view dan nama file Blade biar gampang dicari.", "tag": "Maintenance"},
    {"note": "Benerin route naming (resource route) supaya konsisten dan mudah diingat.", "tag": "Backend"},
    {"note": "Tambahkan validation di controller untuk 1 form CRUD yang sering dipakai.", "tag": "Backend"},
    {"note": "Ganti validation inline ke FormRequest biar controller lebih bersih.", "tag": "Backend"},
    {"note": "Tambahkan flash message sukses/gagal setelah create/update/delete.", "tag": "UI"},
    {"note": "Perbaiki tampilan error validation di Blade (tampilkan per-field).", "tag": "UI"},
    {"note": "Rapikan button style (primary/secondary/danger) biar konsisten.", "tag": "UI"},
    {"note": "Benerin spacing/padding halaman tabel list biar lebih enak dibaca.", "tag": "UI"},
    {"note": "Tambahkan empty state saat data tabel masih kosong.", "tag": "UI"},
    {"note": "Tambahkan konfirmasi sebelum delete (modal/confirm) biar aman.", "tag": "UI"},
    {"note": "Rapikan pagination di halaman list (posisi, ukuran, dan style).", "tag": "UI"},
    {"note": "Tambah search sederhana di halaman list (query param + retain value).", "tag": "Backend"},
    {"note": "Tambah filter sederhana (mis. status/kategori) di list page.", "tag": "Backend"},
    {"note": "Tambah sorting sederhana untuk kolom tertentu di tabel.", "tag": "Backend"},
    {"note": "Optimasi query list: pilih kolom yang perlu saja + eager load relasi kalau ada.", "tag": "Performance"},
    {"note": "Benerin N+1 query kecil yang ketemu di halaman detail/list.", "tag": "Performance"},
    {"note": "Rapikan model fillable/guarded untuk menghindari mass assignment error.", "tag": "Backend"},
    {"note": "Tambah default value untuk field opsional agar form lebih user-friendly.", "tag": "Backend"},
    {"note": "Perbaiki format tanggal di UI (helper/Carbon formatting).", "tag": "UI"},
    {"note": "Bikin helper kecil untuk format rupiah/angka biar konsisten di semua view.", "tag": "UI"},
    {"note": "Perbaiki form input number: step/min dan validasi biar tidak minus.", "tag": "Bugfix"},
    {"note": "Benerin bug kecil: nilai lama (old()) tidak kebaca di form setelah error.", "tag": "Bugfix"},
    {"note": "Perbaiki handling checkbox/radio agar tersimpan dan tampil benar saat edit.", "tag": "Bugfix"},
    {"note": "Rapikan halaman edit: isi default value dan tampilkan field wajib/opsional.", "tag": "UI"},
    {"note": "Tambah relasi Eloquent sederhana dan tampilkan di halaman detail.", "tag": "Backend"},
    {"note": "Tambahkan migration untuk kolom baru yang dibutuhkan fitur kecil.", "tag": "Backend"},
    {"note": "Tambahkan seeder sederhana untuk data dummy (biar gampang testing).", "tag": "Testing"},
    {"note": "Benerin file migration yang urutannya bikin error di fresh migrate.", "tag": "Bugfix"},
    {"note": "Tambahkan constraint sederhana (nullable/unique) untuk field penting.", "tag": "Backend"},
    {"note": "Tambah index untuk kolom yang sering dipakai search/filter.", "tag": "Performance"},
    {"note": "Bikin middleware untuk proteksi halaman tertentu (auth).", "tag": "Security"},
    {"note": "Perbaiki redirect setelah login/logout supaya flow-nya lebih jelas.", "tag": "Security"},
    {"note": "Rapikan auth UI: perbaiki form login, label, dan error message.", "tag": "UI"},
    {"note": "Tambah halaman 403/404 custom biar user tidak bingung.", "tag": "UI"},
    {"note": "Benerin authorization sederhana: user role A tidak bisa akses menu B.", "tag": "Security"},
    {"note": "Tambahkan guard/menu visibility berdasarkan role (di Blade).", "tag": "Security"},
    {"note": "Bikin halaman profile sederhana untuk update nama/email (jika ada).", "tag": "Backend"},
    {"note": "Tambahkan validasi update profile (unique email except current user).", "tag": "Backend"},
    {"note": "Perbaiki layout sidebar: active state menu sesuai route.", "tag": "UI"},
    {"note": "Refactor: pindahkan logic view yang kompleks ke accessor sederhana (di model).", "tag": "Refactor"},
    {"note": "Bersihin komentar code yang tidak relevan dan rapikan penamaan method.", "tag": "Clean Code"},
    {"note": "Rapikan controller: kurangi duplikasi dengan method private kecil.", "tag": "Refactor"},
    {"note": "Pisahkan logic query list ke scope model (scopeSearch/scopeFilter).", "tag": "Refactor"},
    {"note": "Bikin service kecil untuk proses bisnis sederhana biar controller tipis.", "tag": "Refactor"},
    {"note": "Tambah request logging sederhana untuk debug error tertentu.", "tag": "Backend"},
    {"note": "Benerin bug upload file kecil (validasi mime/size dan path storage).", "tag": "Bugfix"},
    {"note": "Tambahkan preview file/gambar di halaman edit (kalau ada upload).", "tag": "UI"},
    {"note": "Rapikan storage link dan dokumentasikan langkah `php artisan storage:link`., "tag": "DevOps"},
    {"note": "Perbaiki error 500: tampilkan message yang aman untuk user, detail di log.", "tag": "Bugfix"},
    {"note": "Bikin alert UI untuk error umum (session expired / unauthorized).", "tag": "UI"},
    {"note": "Tambahkan export sederhana (CSV) untuk data list (kalau dibutuhkan).", "tag": "Backend"},
    {"note": "Tambahkan import sederhana dari CSV (dengan validasi minimal).", "tag": "Backend"},
    {"note": "Benerin bug: timezone tanggal berubah saat disimpan/ditampilkan.", "tag": "Bugfix"},
    {"note": "Rapikan format waktu di seluruh halaman jadi konsisten (WIB).", "tag": "UI"},
    {"note": "Lyricsweb: perbaiki tampilan halaman pencarian (input + button + result).", "tag": "UI"},
    {"note": "Lyricsweb: benerin edge case query kosong (jangan request, tampilkan hint).", "tag": "Bugfix"},
    {"note": "Lyricsweb: tambah loading indicator saat fetch hasil pencarian.", "tag": "UI"},
    {"note": "Lyricsweb: tambah empty state saat tidak ada hasil.", "tag": "UI"},
    {"note": "Lyricsweb: rapikan card/list hasil biar lebih enak dibaca.", "tag": "UI"},
    {"note": "Lyricsweb: rapikan URL param agar bisa di-share (q=...).", "tag": "Backend"},
    {"note": "Lyricsweb: caching sederhana untuk hasil search (session/cache) biar tidak spam request.", "tag": "Performance"},
    {"note": "Lyricsweb: benerin XSS kecil dengan escaping output yang benar di Blade.", "tag": "Security"},
    {"note": "RideShareApp: rapikan halaman list data (tabel + aksi edit/hapus).", "tag": "UI"},
    {"note": "RideShareApp: tambah validasi form tambah data (required & format).", "tag": "Backend"},
    {"note": "RideShareApp: benerin route model binding untuk detail/edit.", "tag": "Backend"},
    {"note": "Inventory-Management: rapikan komponen Vue kecil (props, naming, emit).", "tag": "Frontend"},
    {"note": "Inventory-Management: benerin build asset (Vite/Mix) dan rapikan script npm.", "tag": "DevOps"},
    {"note": "Inventory-Management: tambah interaksi UI kecil pakai Vue (modal/confirm).", "tag": "Frontend"},
    {"note": "Inventory-Management: rapikan state sederhana di Vue (loading/disabled).", "tag": "Frontend"},
    {"note": "Perbaiki konsistensi CSS: hapus duplikat class dan rapikan file style.", "tag": "UI"},
    {"note": "Rapikan responsif: perbaiki tampilan tabel di mobile (scroll/stack).", "tag": "UI"},
    {"note": "Tambahkan breadcrumb sederhana untuk halaman-halaman penting.", "tag": "UI"},
    {"note": "Tambahkan tooltip/help text untuk field yang sering bikin bingung.", "tag": "UI"},
    {"note": "Tambahkan fitur kecil: reset filter/search agar user gampang balik.", "tag": "UI"},
    {"note": "Benerin bug: query filter hilang saat pindah halaman pagination.", "tag": "Bugfix"},
    {"note": "Tambahkan `appends(request()->query())` pada pagination agar query kebawa.", "tag": "Backend"},
    {"note": "Tambah unit test sederhana untuk 1 helper/logic kecil.", "tag": "Testing"},
    {"note": "Tambah feature test sederhana untuk 1 endpoint/route penting.", "tag": "Testing"},
    {"note": "Benerin test yang flaky: data factory/seed kurang lengkap.", "tag": "Testing"},
    {"note": "Rapikan `.env.example` dan hapus secret yang tidak boleh di-commit.", "tag": "Security"},
    {"note": "Cek permission file/dir dan pastikan storage/log bisa ditulis.", "tag": "DevOps"},
    {"note": "Rapikan config cache/session untuk environment dev (biar tidak error).", "tag": "DevOps"},
    {"note": "Perbaiki query Eloquent yang terlalu berat dengan select/eager load.", "tag": "Performance"},
    {"note": "Tambahkan limit minimal untuk hasil search agar tidak berat.", "tag": "Performance"},
    {"note": "Refactor kecil: konsistenin naming method store/update/destroy.", "tag": "Clean Code"},
    {"note": "Rapikan error message agar ramah user (bahasa Indonesia konsisten).", "tag": "UI"},
    {"note": "Update screenshot/gif demo di README supaya project kelihatan hidup.", "tag": "Documentation"},
    {"note": "Tambahkan catatan “Known issues” dan “Next improvements” di README.", "tag": "Documentation"},
    {"note": "Rapikan struktur commit: 1 fitur kecil, 1 commit; jangan campur-campur.", "tag": "Git"},
    {"note": "Tulis commit message yang lebih jelas (feat/fix/refactor/docs).", "tag": "Git"},
    {"note": "Hari ini commit kecil tapi selesai: rapihin 1 halaman/1 flow end-to-end.", "tag": "Mindset"},
]

# Saturday
NOTES_LEARNING = [
    {"note": "Laravel: review lifecycle request (route -> controller -> view) dan catat alurnya.", "tag": "Laravel"},
    {"note": "Laravel: latihan bikin CRUD sederhana (index/create/store/edit/update/destroy).", "tag": "Laravel"},
    {"note": "Laravel: belajar FormRequest untuk validasi dan custom message bahasa Indonesia.", "tag": "Laravel"},
    {"note": "Laravel: pahami Eloquent basic + mass assignment (fillable/guarded).", "tag": "Laravel"},
    {"note": "Laravel: latihan relasi one-to-many dan eager loading untuk hindari N+1.", "tag": "Laravel"},
    {"note": "Laravel: belajar migration (nullable/unique/index) dan kapan dipakai.", "tag": "Laravel"},
    {"note": "Laravel: coba seeding/factory untuk data dummy biar testing cepat.", "tag": "Laravel"},
    {"note": "Laravel: pelajari Blade component/slot untuk UI yang reusable.", "tag": "Laravel"},
    {"note": "Laravel: latihan middleware auth + redirect login yang rapi.", "tag": "Laravel"},
    {"note": "Laravel: belajar authorization dasar (Gate/Policy) untuk role sederhana.", "tag": "Laravel"},
    {"note": "Laravel+Vue: pahami data flow props/emit dan latihan bikin component kecil.", "tag": "Frontend"},
    {"note": "Laravel+Vite/Mix: pelajari build asset dan rapikan npm scripts.", "tag": "DevOps"},
    {"note": "Frontend: belajar dasar accessibility di form (label, aria, error text).", "tag": "Frontend"},
    {"note": "Frontend: latihan responsive layout untuk tabel panjang di mobile.", "tag": "Frontend"},
    {"note": "Frontend: rapikan CSS (hapus duplikasi, konsisten naming).", "tag": "Frontend"},
    {"note": "Testing Laravel: bikin 1 feature test untuk halaman create->store flow.", "tag": "Testing"},
    {"note": "Testing Laravel: belajar assert session error untuk validasi form.", "tag": "Testing"},
    {"note": "Testing Laravel: coba test authorization (user boleh/tidak boleh akses).", "tag": "Testing"},
    {"note": "Quality: belajar cara bikin checklist sebelum merge/commit (manual test).", "tag": "Testing"},
    {"note": "Quality: belajar prinsip “small PR/small commit” dan praktikkan 1 hari.", "tag": "Git"},
    {"note": "Node/Express: review struktur controller-service dan bedakan responsibility.", "tag": "Node"},
    {"note": "Node/Express: latihan middleware validation (Joi/Zod) untuk 1 endpoint.", "tag": "Node"},
    {"note": "Node/Express: belajar error handler terpusat (custom error class).", "tag": "Node"},
    {"note": "Node/Express: latihan pagination + query param yang aman.", "tag": "Node"},
    {"note": "Node/Express: coba integration test 1 endpoint pakai supertest.", "tag": "Node"},
    {"note": "Node/Express: pahami CORS dan cara set whitelist untuk dev.", "tag": "Node"},
    {"note": "Node/Express: belajar env config (dotenv) dan buat .env.example rapi.", "tag": "Node"},
    {"note": "Node/Express: pelajari basic security (helmet, rate limit) secara bertahap.", "tag": "Node"},
    {"note": "Node/Express: latihan logging request/response untuk debug.", "tag": "Node"},
    {"note": "Node/Express: buat dokumentasi endpoint (ringkas) untuk 1 service.", "tag": "Documentation"},
    {"note": "Flutter: review widget dasar dan latihan bikin reusable button/input.", "tag": "Flutter"},
    {"note": "Flutter: latihan state management sederhana (Cubit/BLoC) untuk 1 screen.", "tag": "Flutter"},
    {"note": "Flutter: implement loading/empty/error state yang konsisten.", "tag": "Flutter"},
    {"note": "Flutter: latihan parsing JSON ke model + null safety yang rapi.", "tag": "Flutter"},
    {"note": "Flutter: latihan form validation (TextFormField + validator).", "tag": "Flutter"},
    {"note": "Flutter: belajar navigation (named routes) dan rapikan struktur route.", "tag": "Flutter"},
    {"note": "Flutter: latihan theming (ThemeData) agar UI konsisten.", "tag": "Flutter"},
    {"note": "Flutter: pelajari local storage sederhana (shared_preferences) untuk setting.", "tag": "Flutter"},
    {"note": "Flutter: latihan responsive UI pakai MediaQuery/LayoutBuilder.", "tag": "Flutter"},
    {"note": "Flutter: tulis README run instruction + screenshot untuk 1 app.", "tag": "Documentation"},
    {"note": "Belajar nulis commit message yang jelas (apa/kenapa), bukan cuma 'update'.", "tag": "Git"},
    {"note": "Dokumentasikan 1 keputusan kecil: kenapa pilih approach A dibanding B.", "tag": "Reflection"},
    {"note": "Review 1 bug lama: tulis penyebab + pencegahannya (catatan singkat).", "tag": "Reflection"},
    {"note": "Latihan baca log error: temukan file/line yang benar sebelum coba-coba fix.", "tag": "Reflection"},
    {"note": "Konsistensi: commit kecil yang selesai lebih baik daripada fitur besar yang gantung.", "tag": "Mindset"},
]

# Sunday
NOTES_SUNDAY = [
    {"note": "Refleksi minggu ini: tulis 1 hal yang sudah membaik dari cara ngoding/kerja.", "tag": "Reflection"},
    {"note": "Rapikan 1 technical debt kecil yang paling sering ganggu saat develop.", "tag": "Reflection"},
    {"note": "Review 1 commit minggu ini: apa yang bagus, apa yang bisa lebih rapi.", "tag": "Reflection"},
    {"note": "Cek ulang README/project notes: pastikan step setup masih valid.", "tag": "Documentation"},
    {"note": "Buat rencana kecil minggu depan (3 task realistis, masing-masing < 1 jam).", "tag": "Planning"},
    {"note": "Belajar dari bug: catat root cause + cara mencegahnya ke depannya.", "tag": "Reflection"},
    {"note": "Rapikan workspace: hapus file tidak terpakai dan pastikan struktur folder jelas.", "tag": "Maintenance"},
    {"note": "Konsistensi: yang penting hadir dan ada progress kecil, bukan sempurna.", "tag": "Mindset"},
    {"note": "Review UI/UX: pilih 1 halaman dan cari 1 perbaikan kecil yang berdampak.", "tag": "UI"},
    {"note": "Cek dependency update (minor) dan catat yang perlu diupdate nanti.", "tag": "Maintenance"},
    {"note": "Rapikan catatan dev-log: pastikan tag yang dipakai konsisten.", "tag": "Reflection"},
    {"note": "Baca ulang 1 potongan code lama dan lakukan refactor kecil yang aman.", "tag": "Refactor"},
    {"note": "Latihan komunikasi: tulis ringkasan perubahan minggu ini (2-3 kalimat).", "tag": "Reflection"},
    {"note": "Self-check: pastikan tidak ada secret/token yang pernah ke-commit.", "tag": "Security"},
    {"note": "Istirahat juga bagian dari produktivitas: jaga pace biar konsisten.", "tag": "Mindset"},
]


def pick_pool(today_dt: datetime, logs_len: int):
    """Return (pool_item, pool_name) using Pola B.

    weekday(): Monday=0 ... Sunday=6
    """
    weekday = today_dt.weekday()

    if weekday <= 4:  # Mon-Fri
        pool = NOTES_REPO
        pool_name = "repo"
    elif weekday == 5:  # Sat
        pool = NOTES_LEARNING
        pool_name = "learning"
    else:  # Sun
        pool = NOTES_SUNDAY
        pool_name = "sunday"

    # Rotate within chosen pool using total existing log count for stable cycling
    idx = logs_len % len(pool)
    return pool[idx], pool_name


# ── Main ─────────────────────────────────────────────────────────────────────
def main():
    now_wib = datetime.now(WIB)
    today_str = now_wib.strftime('%Y-%m-%d')

    # Load existing log
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    logs = data.get('logs', [])

    # Guard: don't add duplicate entry for today
    if logs and logs[-1].get('date') == today_str:
        print(f"Entry for {today_str} already exists. Skipping.")
        return

    day_number = len(logs) + 1
    pool_item, pool_name = pick_pool(now_wib, len(logs))

    new_entry = {
        "date": today_str,
        "day": day_number,
        "note": pool_item["note"],
        "tag": pool_item["tag"],
        "type": "auto",
        "source": f"github-actions:{pool_name}",
        "duration": "30m",
    }

    logs.append(new_entry)
    data['logs'] = logs
    data['last_updated'] = today_str
    data['total_days'] = day_number

    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"✅ Appended Day {day_number} entry for {today_str}: [{pool_item['tag']}] ({pool_name})")


if __name__ == '__main__':
    main()