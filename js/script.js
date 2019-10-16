function run(max, min) {
    const intNumberOfRows = document.getElementById('numberOfColumns').value;
    const intNumberOfColumns = document.getElementById('numberOfRows').value;
    if (intNumberOfRows == "" || intNumberOfColumns == "") {
        alert('Please fill required fields.');
    } else if (intNumberOfRows < 1 || intNumberOfColumns < 1)
        alert('All numbers must be 1 or greater');
    else {
        let arrRowNumbers = [];
        let arrColumnNumbers = [];
        let arrMatrix = [[]];
        let intArrayAverage = 0;
        let arrayTemp = [];
        let counter= 0;
        let doOnce = true;
        document.write('<style>table{margin-bottom:45px;}td{border:1px solid black;}</style><table><tr><td></td>');
        for (var i = 0; i < intNumberOfColumns; i++) {
            arrRowNumbers[i] = (Math.floor(Math.random() * (max - min)) + min);
            intArrayAverage = intArrayAverage + arrRowNumbers[i];
        }
        intArrayAverage = intArrayAverage / arrRowNumbers.length;

        for (var i = 0; i < intNumberOfRows; i++) 
        {
            arrColumnNumbers[i] = (Math.floor(Math.random() * (max - intArrayAverage) + intArrayAverage));
            document.write('<td>' + arrColumnNumbers[i] + '</td>');
        }
        document.write ('</tr>');
        for (var i=0;i<intNumberOfColumns;i++)
        {
            arrMatrix[i] = [];
            for(var j=0;j<intNumberOfRows; j++)
            {
                arrMatrix[i][j] = arrRowNumbers[i] * arrColumnNumbers[j];
                if(doOnce)
                {
                    document.write ('<tr><td>' + arrRowNumbers[counter] + '</td>');
                    intBiggest = arrMatrix[i][0];
                    intSmallest = arrMatrix [i][0];
                    counter++;
                    doOnce = false;
                }
                if(intBiggest < arrMatrix[i][j])
                {
                    intBiggest = arrMatrix[i][j];
                }
                else if (intSmallest > arrMatrix[i][j])
                {
                    intSmallest = arrMatrix[i][j];
                }
                document.write('<td>' + arrMatrix[i][j] + '</td>');
               
            }
            console.log(intBiggest);
            arrayTemp[i] = intBiggest - intSmallest;
            document.write('</tr>');
            doOnce = true;
        }
        document.write('</table>');
        for(i=0; i<arrayTemp.length; i++)
        {
            document.write(i+1 + '. row max - min = ' + arrayTemp [i] + '<br>');
        }
        
    }
}
