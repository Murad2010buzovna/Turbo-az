import Car from "./Car";
import "./Cars.scss"
import Filter from "./filter/Filter.jsx";
import { carsData } from "../data/CarsData.js";
import { useEffect } from "react";

export default function Cars() {
    const cars = [
        {
            price: 38000,
            city: 'Baku',
            brand: 'Mercedes',
            model: 'E 300',
            year: 2016,
            bodyType: 'Sedan',
            color: 'White',
            engine: '2.0 L/245 HP/Petrol',
            mileage: 149000,
            gearbox: 'Automatic',
            isNew: false,
            numberOfSeats: 5,
            owners: 1,
            condition: 'No problem in car',
            description: 'Imported from Korea. Not driven locally. 15,000 KM or 12-month warranty!',
            image: 'https://i.pinimg.com/236x/ff/e1/96/ffe19653fa376f73be8b35064b7ed9ce.jpg'
        },
        {
            price: 25000,
            city: 'Istanbul',
            brand: 'BMW',
            model: 'X5',
            year: 2018,
            bodyType: 'SUV',
            color: 'Black',
            engine: '3.0 L/335 HP/Diesel',
            mileage: 80000,
            gearbox: 'Automatic',
            isNew: false,
            numberOfSeats: 7,
            owners: 2,
            condition: 'Excellent condition',
            description: 'Well-maintained BMW X5 with low mileage. Full service history available.',
            image: 'https://i.pinimg.com/236x/be/30/a6/be30a6b4b27ed615a08749a525f2c424.jpg'
        },
        {
            price: 15000,
            city: 'Berlin',
            brand: 'Volkswagen',
            model: 'Golf',
            year: 2015,
            bodyType: 'Hatchback',
            color: 'Blue',
            engine: '1.4 L/125 HP/Petrol',
            mileage: 100000,
            gearbox: 'Manual',
            isNew: false,
            numberOfSeats: 5,
            owners: 3,
            condition: 'Regular wear and tear',
            description: 'Reliable Volkswagen Golf with a fuel-efficient engine. Ideal for city driving.',
            image: 'https://i.pinimg.com/236x/b0/4a/65/b04a6556b3a5d077804e7ed5c3487ce8.jpg'
        },
        {
            price: 50000,
            city: 'Paris',
            brand: 'Audi',
            model: 'A4',
            year: 2020,
            bodyType: 'Sedan',
            color: 'Silver',
            engine: '2.0 L/190 HP/Petrol',
            mileage: 5000,
            gearbox: 'Automatic',
            isNew: true,
            numberOfSeats: 5,
            owners: 0,
            condition: 'Brand new',
            description: 'Brand new Audi A4 with low mileage. Sleek design and advanced features.',
            image: 'https://i.pinimg.com/236x/50/c5/f8/50c5f86e56c65077e3ef3a47ff993d59.jpg'
        },
        {
            price: 18000,
            city: 'New York',
            brand: 'Toyota',
            model: 'Camry',
            year: 2017,
            bodyType: 'Sedan',
            color: 'Red',
            engine: '2.5 L/178 HP/Gasoline',
            mileage: 70000,
            gearbox: 'Automatic',
            isNew: false,
            numberOfSeats: 5,
            owners: 1,
            condition: 'Good condition',
            description: 'Well-maintained Toyota Camry with comfortable seating and reliable performance.',
            image: 'https://i.pinimg.com/236x/dd/6d/d2/dd6dd22b8f97dcd1e3ac4c6b2faebf94.jpg'
        },
        {
            price: 28000,
            city: 'Sydney',
            brand: 'Honda',
            model: 'Civic',
            year: 2019,
            bodyType: 'Sedan',
            color: 'Gray',
            engine: '1.5 L/174 HP/Gasoline',
            mileage: 40000,
            gearbox: 'CVT',
            isNew: false,
            numberOfSeats: 5,
            owners: 2,
            condition: 'Well-maintained',
            description: 'Efficient and stylish Honda Civic with modern features and a comfortable interior.',
            image: 'https://i.pinimg.com/236x/64/63/4e/64634e0f7535c3fe434198595f9699ce.jpg'
        },
        {
            price: 32000,
            city: 'Tokyo',
            brand: 'Lexus',
            model: 'RX 350',
            year: 2018,
            bodyType: 'SUV',
            color: 'White',
            engine: '3.5 L/295 HP/Petrol',
            mileage: 60000,
            gearbox: 'Automatic',
            isNew: false,
            numberOfSeats: 5,
            owners: 1,
            condition: 'Excellent condition',
            description: 'Luxurious and spacious Lexus RX 350 with advanced safety features and a smooth ride.',
            image: 'https://i.pinimg.com/236x/96/91/88/9691887b35409f5e6c1580eac0db3819.jpg'
        },
        {
            price: 20000,
            city: 'London',
            brand: 'Ford',
            model: 'Focus',
            year: 2017,
            bodyType: 'Hatchback',
            color: 'Black',
            engine: '1.6 L/120 HP/Petrol',
            mileage: 55000,
            gearbox: 'Manual',
            isNew: false,
            numberOfSeats: 5,
            owners: 2,
            condition: 'Regular wear and tear',
            description: 'Sporty and practical Ford Focus with agile handling and a comfortable interior.',
            image: 'https://i.pinimg.com/236x/fd/a7/cb/fda7cbabcfc95df1a820220417fdba22.jpg'
        },
        {
            price: 45000,
            city: 'Los Angeles',
            brand: 'Tesla',
            model: 'Model 3',
            year: 2021,
            bodyType: 'Electric Sedan',
            color: 'Midnight Silver',
            engine: 'Electric',
            mileage: 10000,
            gearbox: 'Automatic',
            isNew: true,
            numberOfSeats: 5,
            owners: 0,
            condition: 'Brand new',
            description: 'Cutting-edge electric sedan with impressive acceleration and long-range capabilities.',
            image: 'https://i.pinimg.com/236x/fe/84/7a/fe847aad7ec76068429212125d025074.jpg'
        },
        {
            price: 40000,
            city: 'Moscow',
            brand: 'Volvo',
            model: 'XC60',
            year: 2019,
            bodyType: 'SUV',
            color: 'Gray',
            engine: '2.0 L/250 HP/Petrol',
            mileage: 35000,
            gearbox: 'Automatic',
            isNew: false,
            numberOfSeats: 5,
            owners: 1,
            condition: 'Well-maintained',
            description: 'Reliable and safe Volvo XC60 with comfortable seating and advanced safety features.',
            image: 'https://i.pinimg.com/236x/f2/96/32/f296324e275f7dda4822c0d868716914.jpg'
        }
    ];

    //   function Cars() {
    // useEffect (() => 
    //            function getCarsData() {


    //              const  [cars, setCars] = useState(carsData)
    //   }
    //         )}
    return (
        <div className="">
            <Filter />

            <div className="cars">
                {cars.map(function (car, index) {
                    return <Car key={index} car={car} />
                })}

            </div>
        </div>

    );

};

