export function task4() {
    const date1 = new Date('2024-03-19');
    const date2 = new Date('2024-03-21');

    // Get the time difference in milliseconds
    const differenceInTime = date2.getTime() - date1.getTime();
    
    // Convert milliseconds to days
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    
    console.log("Difference in days:", differenceInDays); // Output: 2
}
