import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laptop } from '../model/laptop.model';

@Injectable({
    providedIn: 'root'
})
export class LaptopService {
    private apiUrl = 'http://localhost:8081/laptopstore/laptops';

    constructor(private http: HttpClient) { }

    getAllLaptops(): any {
        // write your logic here
        return null;
    }

    getLaptopById(id: number): any {
        // write your logic here
        return null;
    }

    createLaptop(laptop: Laptop): any {
        // write your logic here
        return null;
    }

    updateLaptop(id: number, laptop: Laptop): any {
        // write your logic here
        return null;
    }

    deleteLaptop(id: number): any {
        // write your logic here
        return null;
    }

    searchLaptopsByName(name: string): any {
        // write your logic here
        return null;
    }

    searchLaptopsByPrice(price: number): any {
        // write your logic here
        return null;
    }

    searchLaptopsByBrand(brand: string): any {
        // write your logic here
        return null;
    }
}
