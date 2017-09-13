import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PageSliderModule } from 'ng2-page-slider';
import { Paginator } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { Category } from './category.model';
import { Book } from './book.model';
import { BookService } from './book.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  lastBooks: Book[] = [];
  categories: Category[];
  paginationSize: number = 5;
  bookForm: FormGroup;
  actualPage: number = 0;
  configSnackBar = new MdSnackBarConfig();
  id: number = null;
  editBook: Book;
  display: boolean = false;


  @ViewChild(Paginator) paginator: Paginator;

  constructor(private fb: FormBuilder, private service: BookService, public snackBar: MdSnackBar, private router: Router) {

    this.service.getJsonBooks().subscribe(
      (data) => {
        this.books = data.books;
        this.categories = data.categories;

        this.getBooks(this.lastBooks, 0);
      },
      (error) => {
        console.log(error);
      }
    );
    this.configSnackBar.extraClasses = ['custom-snack'];
    this.configSnackBar.duration = 5000;
  }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      publishedDate: ['', Validators.required],
      user: '',
    });
  }

  resetForm() {
    this.bookForm.reset();
  }

  getBooks(lastBooks: Book[], pageNumber) {
    const first = pageNumber * this.paginationSize;

    if (lastBooks.length == 0) {
      this.paginator._first = 0;
      this.paginator.updatePageLinks();
      const last = first + 5;
      this.lastBooks = this.books.slice(first, last);
    } else {
      const last = first + 5;
      this.lastBooks = this.books.slice(first, last);
    }

  }

  paginate(event) {
    const pageNumber = event.page;
    this.actualPage = pageNumber;
    this.getBooks(this.lastBooks, pageNumber);

  }

  create() {
    if (this.id !== null) {
      this.update(this.id);
    } else {
      let book: Book = new Book();
      book.name = this.bookForm.value.name;
      book.author = this.bookForm.value.author;
      book.category = this.bookForm.value.category;
      book.publishedDate = this.bookForm.value.publishedDate;
      book.user = this.bookForm.value.user;
      let id = +this.books[this.books.length - 1].id + 1;
      book.id = id;
      this.books.push(book);
      this.getBooks(this.books, this.actualPage);
      this.snackBar.open("New Book Created", "Ok", this.configSnackBar);
    }
    this.resetForm();
    window.location.hash = '';
  }

  setFields(id: number) {
    let book: Book = this.books.find(x => id == x.id);
    this.bookForm.controls['name'].setValue(book.name);
    this.bookForm.controls['author'].setValue(book.author);
    this.bookForm.controls['category'].setValue(book.category);
    this.bookForm.controls['publishedDate'].setValue(book.publishedDate);
    this.bookForm.controls['user'].setValue(book.user);
    this.editBook = book;
    this.id = book.id;
    window.location.hash = '';
    window.location.hash = 'form-section';

  }

  update(id: number) {
    let index = this.books.indexOf(this.editBook);
    let book: Book = new Book();
    book.name = this.bookForm.value.name;
    book.author = this.bookForm.value.author;
    book.category = this.bookForm.value.category;
    book.publishedDate = this.bookForm.value.publishedDate;
    book.user = this.bookForm.value.user;
    book.id = id;
    this.books[index] = book;
    this.getBooks(this.books, this.actualPage);
    this.snackBar.open("Book Updated", "Ok", this.configSnackBar);
    this.id = null;
    this.resetForm();
  }

  delete(id: number) {

    let book: Book = this.books.find(x => id == x.id);
    let index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    }
    this.getBooks(this.books, this.actualPage);
    this.snackBar.open("Book Deleted", "Ok", this.configSnackBar);

  }

  deliver() {
    let book: Book = this.books.find(x => this.id == x.id);
    let index = this.books.indexOf(book);
    this.books[index].user = "";
    this.getBooks(this.books, this.actualPage);
    this.snackBar.open("Book Delivered", "Ok", this.configSnackBar);
    this.id = null;
    this.display = false;

  }

  openModal(id: number) {
    this.id = id;
    this.display = true;
  }

  logout(){
    this.router.navigate(['login']);
  }


}
