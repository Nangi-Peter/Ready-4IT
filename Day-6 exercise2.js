const Credits = ['paid', 'due', 'paid', 'due'];

// Write your loop here ...
for (const status of Credits) {
    if (status === 'paid') {
        continue; // Skip paid records
    }
    
    // Only log the records that are 'due'
    console.log`(Credit status: ${status})`;
}