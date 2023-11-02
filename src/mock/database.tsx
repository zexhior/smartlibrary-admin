import { User } from "../modules/models/users";
import Image4 from "../common/images/zelda/1.png";
import Image1 from "../common/images/zelda/3.webp";
import Image2 from "../common/images/zelda/4.jpg";
import Cover from "../common/images/books/couv_8.png";
import Author from "../common/images/author.jpg";

export const UsersData: Array<User> = [
  {
    _id: "1",
    name: "Wick",
    first_name: "John",
    birth_date: "18-02-90",
    phone_number: "0340154812",
    email: "johnwick@gmail.com",
    password: "ilovemydog",
    passwordConfirm: "ilovemydog",
    role: "user",
    photo: Image4,
  },
  {
    _id: "2",
    name: "Wick",
    first_name: "John",
    birth_date: "18-02-90",
    phone_number: "0340154812",
    email: "johnwick@gmail.com",
    password: "ilovemydog",
    passwordConfirm: "ilovemydog",
    role: "user",
    photo: Image1,
  },
  {
    _id: "3",
    name: "Wick",
    first_name: "John",
    birth_date: "18-02-90",
    phone_number: "0340154812",
    email: "johnwick@gmail.com",
    password: "ilovemydog",
    passwordConfirm: "ilovemydog",
    role: "user",
    photo: Image2,
  },
  {
    _id: "4",
    name: "Wick",
    first_name: "John",
    birth_date: "18-02-90",
    phone_number: "0340154812",
    email: "johnwick@gmail.com",
    password: "ilovemydog",
    passwordConfirm: "ilovemydog",
    role: "user",
    photo: Image4,
  },
  {
    _id: "5",
    name: "Wick",
    first_name: "John",
    birth_date: "18-02-90",
    phone_number: "0340154812",
    email: "johnwick@gmail.com",
    password: "ilovemydog",
    passwordConfirm: "ilovemydog",
    role: "user",
    photo: Image1,
  },
  {
    _id: "6",
    name: "Wick",
    first_name: "John",
    birth_date: "18-02-90",
    phone_number: "0340154812",
    email: "johnwick@gmail.com",
    password: "ilovemydog",
    passwordConfirm: "ilovemydog",
    role: "user",
    photo: Image2,
  },
  {
    _id: "7",
    name: "Wick",
    first_name: "John",
    birth_date: "18-02-90",
    phone_number: "0340154812",
    email: "johnwick@gmail.com",
    password: "ilovemydog",
    passwordConfirm: "ilovemydog",
    role: "user",
    photo: Image4,
  },
];

export const BooksData = [
  {
    _id: "1",
    title: "Tout une nuit",
    isbn: "02348575",
    star: 3,
    publishing_date: "2012-05-16",
    cover: Cover,
    synopsis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit officia unde animi aut ipsam culpa blanditiis expedita voluptate repudiandae accusantium eius explicabo, minima incidunt, molestias quidem facere eveniet cupiditate.",
    file: "http://127.0.0.1:3000",
  },
  {
    _id: "2",
    title: "Tout une nuit",
    isbn: "02348575",
    star: 3,
    publishing_date: "2012-05-16",
    cover: Cover,
    synopsis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit officia unde animi aut ipsam culpa blanditiis expedita voluptate repudiandae accusantium eius explicabo, minima incidunt, molestias quidem facere eveniet cupiditate.",
    file: "http://127.0.0.1:3000",
  },
  {
    _id: "3",
    title: "Tout une nuit",
    isbn: "02348575",
    star: 3,
    publishing_date: "2012-05-16",
    cover: Cover,
    synopsis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit officia unde animi aut ipsam culpa blanditiis expedita voluptate repudiandae accusantium eius explicabo, minima incidunt, molestias quidem facere eveniet cupiditate.",
    file: "http://127.0.0.1:3000",
  },
  {
    _id: "4",
    title: "Tout une nuit",
    isbn: "02348575",
    star: 3,
    publishing_date: "2012-05-16",
    cover: Cover,
    synopsis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sit officia unde animi aut ipsam culpa blanditiis expedita voluptate repudiandae accusantium eius explicabo, minima incidunt, molestias quidem facere eveniet cupiditate.",
    file: "http://127.0.0.1:3000",
  },
];

export const AuthorsData = [
  {
    _id: "1",
    first_name: "Gilles",
    last_name: "Bindi",
    star: 2,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam libero, cupiditate tempora fugit suscipit harum iste soluta earum asperiores eveniet qui nemo fugiat. Doloribus reiciendis itaque, alias ipsa ea totam?",
    photo: Author,
  },
  {
    _id: "2",
    first_name: "Gilles",
    last_name: "Bindi",
    star: 2,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam libero, cupiditate tempora fugit suscipit harum iste soluta earum asperiores eveniet qui nemo fugiat. Doloribus reiciendis itaque, alias ipsa ea totam?",
    photo: Author,
  },
  {
    _id: "3",
    first_name: "Gilles",
    last_name: "Bindi",
    star: 2,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam libero, cupiditate tempora fugit suscipit harum iste soluta earum asperiores eveniet qui nemo fugiat. Doloribus reiciendis itaque, alias ipsa ea totam?",
    photo: Author,
  },
  {
    _id: "4",
    first_name: "Gilles",
    last_name: "Bindi",
    star: 2,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam libero, cupiditate tempora fugit suscipit harum iste soluta earum asperiores eveniet qui nemo fugiat. Doloribus reiciendis itaque, alias ipsa ea totam?",
    photo: Author,
  },
];

export const CategoriesData = [
  {
    _id: "1",
    wording: "Philosophie",
  },
  {
    _id: "2",
    wording: "Aventure",
  },
  {
    _id: "3",
    wording: "Policier",
  },
  {
    _id: "4",
    wording: "Romantic",
  },
];
