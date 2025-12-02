import { Bell, Lock, User, Building2, CreditCard, Globe } from 'lucide-react';

export function Settings() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl mb-2 text-[#0f172a]">Pengaturan</h1>
        <p className="text-gray-600">Kelola preferensi dan konfigurasi sistem Anda.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar Menu */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 h-fit">
          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-[#dbeafe] to-[#d1fae5] text-[#0f172a]">
              <User className="w-5 h-5 text-[#0ea5e9]" />
              <span>Profil</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
              <Building2 className="w-5 h-5" />
              <span>Perusahaan</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
              <Bell className="w-5 h-5" />
              <span>Notifikasi</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
              <Lock className="w-5 h-5" />
              <span>Keamanan</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
              <CreditCard className="w-5 h-5" />
              <span>Pembayaran</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50">
              <Globe className="w-5 h-5" />
              <span>Bahasa & Wilayah</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl mb-6">Informasi Profil</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-blue-600" />
                </div>
                <div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-2">
                    Ubah Foto
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Hapus
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Nama Depan</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John"
                    defaultValue="Admin"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Nama Belakang</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Doe"
                    defaultValue="EasyDrive"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="admin@easydrive.com"
                  defaultValue="admin@easydrive.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Nomor Telepon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="081234567890"
                  defaultValue="081234567890"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Batal
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#10b981] text-white rounded-lg hover:shadow-lg transition-shadow">
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>

          {/* Company Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl mb-6">Informasi Perusahaan</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Nama Perusahaan</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nama Perusahaan"
                  defaultValue="Easy Drive"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Alamat</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Alamat lengkap perusahaan"
                  defaultValue="Balige, Toba, Sumatra Utara"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Kota</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Balige"
                    defaultValue="Balige"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Kode Pos</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="62163"
                    defaultValue="62163"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Batal
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl mb-6">Preferensi Notifikasi</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm">Booking Baru</p>
                  <p className="text-xs text-gray-600">Terima notifikasi saat ada booking baru</p>
                </div>
                <input type="checkbox" className="w-5 h-5" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm">Pembayaran Diterima</p>
                  <p className="text-xs text-gray-600">Notifikasi saat pembayaran berhasil</p>
                </div>
                <input type="checkbox" className="w-5 h-5" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm">Mobil Perlu Perawatan</p>
                  <p className="text-xs text-gray-600">Pengingat jadwal maintenance mobil</p>
                </div>
                <input type="checkbox" className="w-5 h-5" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm">Laporan Mingguan</p>
                  <p className="text-xs text-gray-600">Terima ringkasan performa setiap minggu</p>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}