'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'; // Pastikan path ini sesuai dengan lokasi file users-service.ts
import { registerUserService } from '@/services/users-service/users-service';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function RegisterUserForm() {
  const router = useRouter();
  const [gender, setGender] = useState<string>('');
  const [jenis_status, setJenisStatus] = useState<string>('');
  const [status_aktif, setStatusAktif] = useState<number>(0);

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('NIS', (e.target as HTMLFormElement).NIS.value);
    formData.append('NISN', (e.target as HTMLFormElement).NISN.value);
    formData.append('nama', (e.target as HTMLFormElement).nama.value);
    formData.append('gender', gender);
    formData.append('tempat_lahir', (e.target as HTMLFormElement).tempat_lahir.value);
    formData.append('tgl_lahir', (e.target as HTMLFormElement).tgl_lahir.value);
    formData.append('kelas', (e.target as HTMLFormElement).kelas.value);
    formData.append('jenis_status', jenis_status);
    formData.append('agama', (e.target as HTMLFormElement).agama.value);
    formData.append('alamat', (e.target as HTMLFormElement).alamat.value);
    formData.append('rt', (e.target as HTMLFormElement).rt.value);
    formData.append('rw', (e.target as HTMLFormElement).rw.value);
    formData.append('dusun', (e.target as HTMLFormElement).dusun.value);
    formData.append('kelurahan', (e.target as HTMLFormElement).kelurahan.value);
    formData.append('kecamatan', (e.target as HTMLFormElement).kecamatan.value);
    formData.append('kabupaten', (e.target as HTMLFormElement).kabupaten.value);
    formData.append('provinsi', (e.target as HTMLFormElement).provinsi.value);
    formData.append('nama_ayah', (e.target as HTMLFormElement).nama_ayah.value);
    formData.append('pekerjaan_ayah', (e.target as HTMLFormElement).pekerjaan_ayah.value);
    formData.append('nama_ibu', (e.target as HTMLFormElement).nama_ibu.value);
    formData.append('pekerjaan_ibu', (e.target as HTMLFormElement).pekerjaan_ibu.value);
    formData.append('nama_wali', (e.target as HTMLFormElement).nama_wali.value);
    formData.append('pekerjaan_wali', (e.target as HTMLFormElement).pekerjaan_wali.value);
    formData.append('nama_ibu', (e.target as HTMLFormElement).nama_ibu.value);
    formData.append('pekerjaan_ibu', (e.target as HTMLFormElement).pekerjaan_ibu.value);
    formData.append('nama_wali', (e.target as HTMLFormElement).nama_wali.value);
    formData.append('pekerjaan_wali', (e.target as HTMLFormElement).pekerjaan_wali.value);
    formData.append('rombel', (e.target as HTMLFormElement).rombel.value);
    formData.append('sekolah_asal', (e.target as HTMLFormElement).sekolah_asal.value);
    formData.append('status_aktif', status_aktif.toString());

    const response = await registerUserService(formData);

    if (response?.error) {
      toast.error(response.error);
    } else {
      toast.success(response.message);
      router.push('/dashboard/users');
    }
  };

  return (
    <form onSubmit={onSubmitForm} className="flex flex-col gap-5 p-5 border border-gray-300 rounded-lg shadow-md">
      <div className="flex flex-col gap-2">
        <h4 className="font-bold">Data Pribadi Siswa</h4>
        <hr />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="NIS">
            NIS
          </Label>
          <Input id="NIS" name="NIS" type="text" placeholder="Masukkan Nomor NIS Siswa" required />
        </div>
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="NISN">
            NISN
          </Label>
          <Input id="NISN" name="NISN" type="text" placeholder="Masukkan Nomor NISN Siswa" required />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="nama">
            Nama
          </Label>
          <Input id="nama" name="nama" type="text" placeholder="Masukkan Nama Lengkap Siswa" required />
        </div>
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="gender">
            Jenis Kelamin
          </Label>
          <Select onValueChange={(value) => setGender(value)} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Jenis Kelamin Siswa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="L" value="L">
                Laki-laki
              </SelectItem>
              <SelectItem key="P" value="P">
                Perempuan
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="tempat_lahir">
            Tempat Lahir
          </Label>
          <Input id="tempat_lahir" name="tempat_lahir" type="text" placeholder="Masukkan Tempat Lahir Siswa" required />
        </div>
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="tgl_lahir">
            Tanggal Lahir
          </Label>
          <Input id="tgl_lahir" name="tgl_lahir" type="date" placeholder="Masukkan Tanggal Lahir Siswa" required />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="kelas">
            Kelas
          </Label>
          <Input id="kelas" name="kelas" type="text" placeholder="Masukkan Kelas Siswa" required />
        </div>
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="jenis_status">
            Jenis Status
          </Label>
          <Select onValueChange={(value) => setJenisStatus(value)} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Jenis Status Siswa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="NK" value="NK">
                Naik Kelas
              </SelectItem>
              <SelectItem key="TN" value="TN">
                Tidak Naik Kelas
              </SelectItem>
              <SelectItem key="SB" value="SB">
                Siswa Baru
              </SelectItem>
              <SelectItem key="PD" value="PD">
                Pindahan
              </SelectItem>
              <SelectItem key="KL" value="KL">
                Keluar
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="agama">
            Agama
          </Label>
          <Input id="agama" name="agama" type="text" placeholder="Masukkan Agama Siswa" />
        </div>
        <div className="text-left w-full md:block hidden"></div>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <h4 className="font-bold">Alamat Siswa</h4>
        <hr />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="alamat">
            Alamat Lengkap
          </Label>
          <Input id="alamat" type="text" placeholder="Masukkan Alamat Lengkap Siswa" required />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="rt">
            RT
          </Label>
          <Input id="rt" type="text" placeholder="Masukkan RT Rumah Siswa" required />
        </div>
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="rw">
            RW
          </Label>
          <Input id="rw" type="text" placeholder="Masukkan RW Rumah Siswa" required />
        </div>
        <div className="text-left w-full">
          <Label className="font-semibold" htmlFor="dusun">
            Dusun
          </Label>
          <Input id="dusun" type="text" placeholder="Masukkan Dusun Rumah Siswa" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="kelurahan">
            Kelurahan
          </Label>
          <Input id="kelurahan" type="text" placeholder="Masukkan Kelurahan Rumah Siswa" required />
        </div>
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="kecamatan">
            Kecamatan
          </Label>
          <Input id="kecamatan" type="text" placeholder="Masukkan Kecamatan Rumah Siswa" required />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="kabupaten">
            Kabupaten
          </Label>
          <Input id="kabupaten" type="text" placeholder="Masukkan Kabupaten Rumah Siswa" required />
        </div>
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="provinsi">
            Provinsi
          </Label>
          <Input id="provinsi" type="text" placeholder="Masukkan Provinsi Rumah Siswa" required />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <h4 className="font-bold">Data Wali Siswa</h4>
        <hr />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="font-semibold" htmlFor="nama_ayah">
            Nama Ayah
          </Label>
          <Input id="nama_ayah" type="text" placeholder="Masukkan Nama Ayah Siswa" />
        </div>
        <div className="text-left w-full">
          <Label className="font-semibold" htmlFor="pekerjaan_ayah">
            Pekerjaan Ayah
          </Label>
          <Input id="pekerjaan_ayah" type="text" placeholder="Masukkan Pekerjaan Ayah Siswa" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="font-semibold" htmlFor="nama_ibu">
            Nama Ibu
          </Label>
          <Input id="nama_ibu" type="text" placeholder="Masukkan Nama Ibu Siswa" />
        </div>
        <div className="text-left w-full">
          <Label className="font-semibold" htmlFor="pekerjaan_ibu">
            Pekerjaan Ibu
          </Label>
          <Input id="pekerjaan_ibu" type="text" placeholder="Masukkan Pekerjaan Ibu Siswa" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="font-semibold" htmlFor="nama_wali">
            Nama Wali
          </Label>
          <Input id="nama_wali" type="text" placeholder="Masukkan Nama Wali Siswa" />
        </div>
        <div className="text-left w-full">
          <Label className="font-semibold" htmlFor="pekerjaan_wali">
            Pekerjaan Wali
          </Label>
          <Input id="pekerjaan_wali" type="text" placeholder="Masukkan Pekerjaan Wali Siswa" />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <h4 className="font-bold">Data Lain-lain</h4>
        <hr />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <div className="text-left w-full">
          <Label className="font-semibold" htmlFor="rombel">
            Rombel
          </Label>
          <Input id="rombel" type="text" placeholder="Masukkan Rombel Siswa" />
        </div>
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="sekolah_asal">
            Sekolah Asal
          </Label>
          <Input id="sekolah_asal" type="text" placeholder="Masukkan Sekolah Asal Siswa" required />
        </div>
        <div className="text-left w-full">
          <Label className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold" htmlFor="status_aktif">
            Status Aktif
          </Label>
          <Select onValueChange={(value) => setStatusAktif(parseInt(value))} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Status Aktif Siswa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key={1} value="1">
                Aktif
              </SelectItem>
              <SelectItem key={0} value="0">
                Tidak Aktif
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-start mt-5">
        <Button type="submit" className="bg-green-600 hover:bg-green-700">
          Tambah Siswa
        </Button>
      </div>
    </form>
  );
}
