import React from "react"

const list = [
    {
      "id": 1,
      "name": "Váy 1",
      "Gia": "1000",
      "img": "https://afamilycdn.com/150157425591193600/2021/4/11/1692500054901263023564334687201552819797495n-16181354543232045300527.jpg",
      "gioithieu": "1",
      "img_phu1": "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/294516027_153789317237373_681100626904608747_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-emNXIKQAJsAX9clYN1&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_8x8ZD3ELaGpeY5jWKsinXiJD4ISna6lnOtsP15AKLug&oe=630C8C6A",
      "img_phu2": "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/294678532_153789313904040_1288010271914270227_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=APvRIIzeqaMAX9_rTII&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8RA0NmWks13dPFi07oZSpYOKA4LWxm_zYnIEyqw7q33Q&oe=630C3EBE"
    },
    {
      "id": 2,
      "name": "Váy 2",
      "Gia": "2000",
      "img": "https://cf.shopee.vn/file/d8a65a2185df0dc76538e2550d088fbd",
      "gioithieu": "2"
    },
    {
      "id": 3,
      "name": "Váy 3",
      "Gia": "3000",
      "img": "https://suppothomap.com/wp-content/uploads/2020/05/vay-co-tich-trung-hoa-4.jpg",
      "gioithieu": "3"
    },
    {
      "id": 4,
      "name": "Váy 4",
      "Gia": "4000",
      "img": "https://cf.shopee.vn/file/511f353c9fd8a107e716accf4b829bfe",
      "gioithieu": "4"
    },
    {
      "name": "Váy 5",
      "Gia": "5000",
      "img": "https://vominhthien.com/Uploads/Images/Ngu%E1%BB%93n%20h%C3%A0ng%20v%C3%A1y%20d%E1%BA%A1%20h%E1%BB%99i%20Trung%20Qu%E1%BB%91/cach-nhap-nguon-hang-vay-da-hoi-trung-quoc.jpg",
      "giothieu": "5",
      "id": 5
    },
    {
      "name": "Váy 6",
      "Gia": "6000",
      "img": "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/294040553_153432217273083_7469174767513127467_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=br_X2GqqOh0AX9Nmv0N&tn=AvM0IxdMUQSCtue5&_nc_ht=scontent.fhan2-2.fna&oh=00_AT9IOA3Uu42CL1aFrAkJrbY_GuZDQE-gR03J5AEkU2YZJQ&oe=63090AA6",
      "giothieu": "6",
      "id": 6
    },
    {
      "name": "Váy 7",
      "Gia": "7000",
      "img": "http://dathangquangchau.com/wp-content/uploads/2017/01/chan-vay-ren-10.jpg",
      "giothieu": "7",
      "id": 7
    },
    {
      "name": "Váy 1",
      "Gia": "8000",
      "img": "https://cf.shopee.vn/file/27df2aea44467ddb4a6180f7eb5e92ea",
      "giothieu": "8",
      "id": 8
    },
    {
      "name": "Váy 9",
      "Gia": "9000",
      "img": "https://my-live-01.slatic.net/p/4c9bd60375d50d787d47d56f2d5e2bf9.jpg",
      "giothieu": "9",
      "id": 9
    },
    {
      "name": "Váy 10",
      "Gia": "10000",
      "img": "https://filebroker-cdn.lazada.vn/kf/Sacfbbae1da4b47d1907c2e838ed6889aX.jpg",
      "giothieu": "10",
      "id": 10
    },
    {
      "name": "Váy 11",
      "Gia": "11000",
      "img": "https://cf.shopee.vn/file/d9621cadd8a487fc1d4e1adf008254d0",
      "giothieu": "11",
      "id": 11
    },
    {
      "name": "Váy 12",
      "Gia": "12000",
      "img": "https://cf.shopee.vn/file/a6f62461dc0b43406905475ea26abfed",
      "giothieu": "12",
      "id": 12
    },
    {
      "name": "Váy 13",
      "Gia": "13000",
      "img": "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/300427577_161467586469546_8920409063008720417_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WuAkQB5GbMYAX9_RWPa&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-xigLYvahFtFaOYbOajAUHw3gc9Ibz_12QyzWmA6Jo9Q&oe=6309CAA4",
      "giothieu": "13",
      "id": 13
    },
    {
      "name": "Váy 1",
      "Gia": "14000",
      "img": "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/289467760_150155657598450_6079832446194842731_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=X1lX0AbBOvEAX-v-pab&tn=AvM0IxdMUQSCtue5&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-dO6XsrzvnffDm0DJqo2nwiwxKTLrQCSkwqUj4fNAoKg&oe=630B0B86",
      "giothieu": "14",
      "id": 14
    },
    {
      "name": "Váy 15",
      "Gia": "15000",
      "img": "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/298757564_160657809883857_4536489783332584925_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MKPO51XXaYwAX-6azI5&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-ZpU-xnF25BEBI-d-IVExVnNyxleTKHIRltnCOdk7j3w&oe=630C31FA",
      "giothieu": "15",
      "id": 15
    },
    {
      "name": "Váy 16",
      "Gia": "16000",
      "img": "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/300038547_160654403217531_7597117940526875743_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=UVIQNX9tCTwAX_kYtZc&_nc_oc=AQniYwcG8Bci_O8jijZ1LwbOAJ7S1fy_Xhyi_fnlAMn8Pf2CVRnk8X-AtZEcnMxHJ1Q&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_oa0aOmRC9PlhizOHXmiOC0MoV2BXjNMjV1PKXjKUyYg&oe=630B0FB2",
      "giothieu": "16",
      "id": 15
    }
  ]


  export default list