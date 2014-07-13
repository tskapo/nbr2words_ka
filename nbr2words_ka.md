#nbr2words_ka#
##ალფა ვერსია##

nbr2words_ka რიცხვის ქართულ სიტყვებად გადამყვან-წარმომჩენი ფუნქციაა.
 
ჯერჯერობით nbr2words_ka იძლევა მთელი რიცხვების (ვიგინტილიონის 10^63 ჩათვლით) ქართულ სიტყვებად გადაყვანის საშუალებას.

<img src="https://github.com/tskapo/nbr2words_ka/blob/master/res.png" width="578" height="334"> 

<br/>

**გასაკეთებელია**: 
------
------

|   | დავალება                 | მაგალითი|
|---|--------------------------| -------------| 
|1. | ათწილადები სრული ფორმით  | 5,54 → ხუთი მთელი ორმოცდათოთხმეტი მეასედი|
|2. | ათწილადები მოკლე ფორმით  | 5,54 → ხუთი მთელი ორმოცდათოთხმეტი|
|3. | ვალუტის სახელების დაყენება |  setCurency("ლარი", "თეთრი")|
|4. | თანხა სრული ფორმით  | 5,54ლ  → ხუთი ლარი და ორმოცდათოთხმეტი თეთრი|
|5. | ათწილადები მოკლე ფორმით  | 5,54ლ → ხუთი და ორმოცდათოთხმეტი|
|6. | რიგობითი სახელები  | 1 → პირველი, 5 → მეხუთე, 101 → ასმეერთე...|
|7. | Node.js-ის მოდულად შეფუთვა | |