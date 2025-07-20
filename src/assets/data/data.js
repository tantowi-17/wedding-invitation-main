export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Muh. Ardi Angga, SP',
            child: 'Putra Bungsu',
            father: 'Mustaring',
            mother: 'Minahari',
            image: './src/assets/images/pria.png'
        },
        P: {
            id: 2,
            name: 'Anggun S, S.Sos',
            child: 'Putri Pertama',
            father: 'Sujani',
            mother: 'Siti Sarah  (Almarhumah)',
            image: './src/assets/images/wanita.png'
        },

        couple: 'https://besokakad.id/wp-content/uploads/2025/05/Adat-Bugis-Besokakad.Id_10.webp'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Juli',
            date: '30',
            day: 'Rabu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Juli',
            date: '31',
            day: 'Kamis',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Pasar Toabdak 1, RT 000/ RW 000, Desa.Tobadak, Kec.Tobadak, Kab. Mamuju Tengah'
    },

    link: {
        calendar: 'https://calendar.app.google/oSVLRMYC79GzuA4f9',
        map: 'https://maps.app.goo.gl/q1Ask2Jgd4ekiiKBA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Muhammad Ardi Angga',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Muhammad Ardi Angga',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwg0PydHsqx9dbSE10nThY_Wqe7QDbO-EpnBt2lmiHhd_KwK5Gf1vz54H-HGA6IiT7Q/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
