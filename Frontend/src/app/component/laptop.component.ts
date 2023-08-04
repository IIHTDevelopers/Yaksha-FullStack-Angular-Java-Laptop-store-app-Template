import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LaptopService } from '../service/laptop.service';
import { Laptop } from '../model/laptop.model';

@Component({
    selector: 'app-laptop',
    templateUrl: './laptop.component.html',
    styleUrls: ['./laptop.component.css'],
})
export class LaptopComponent implements OnInit {
    laptops: Laptop[] = [];
    filteredLaptops: Laptop[] = [];
    laptopForm!: FormGroup;
    searchForm!: FormGroup;
    formSubmitted = false;

    constructor() { }

    ngOnInit(): void { }

    getAllLaptops(): void { }

    onSearch(): void { }

    deleteLaptop(id: number): void { }

    onSubmit(): void { }

    editLaptop(id: number): void { }

    resetForm(): void { }
}
