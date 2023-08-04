import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LaptopService } from '../service/laptop.service';
import { Laptop } from '../model/laptop.model';

@Component({
    selector: 'app-laptop',
    templateUrl: './laptop.component.html',
    styleUrls: [],
})
export class LaptopComponent implements OnInit {
    laptops: Laptop[] = [];
    filteredLaptops: Laptop[] = [];
    laptopForm!: FormGroup;
    searchForm!: FormGroup;
    formSubmitted = false;

    constructor() {}

    ngOnInit(): void {
        // write your logic here
    }

    getAllLaptops(): void {
        // write your logic here
    }

    onSearch(): void {
        // write your logic here
    }

    deleteLaptop(id: number): void {
        // write your logic here
    }

    onSubmit(): void {
        // write your logic here
    }

    editLaptop(id: number): void {
        // write your logic here
    }

    resetForm(): void {
        // write your logic here
    }
}
