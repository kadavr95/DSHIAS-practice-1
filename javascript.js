window.onload = function() 
{
    let data_set=[];
    let coef=[6,0,-4,-3,5,6,-6,-13,7,44,64,44,7,-13,-6,6,5,-3,-4,0,6]
    let sum1=0, sum2=0;
    for (i=22; i>2; i=i-0.01){
        sum1=Math.cos(2*3.14/i)*coef[0];
        sum2=Math.sin(2*3.14/i)*coef[0];
        for (j=2; j<21; j++){
            sum1+=Math.cos(2*3.14/i*j)*coef[j];
            sum2+=Math.sin(2*3.14/i*j)*coef[j];
        }
        data_set.push({x: 2/i, y: 20*Math.log10(Math.sqrt(sum1*sum1+sum2*sum2))})
    }
	if (document.getElementById("result"))
    {
        var ctx = document.getElementById("result");
        var myChart = new Chart(ctx, {
            type: 'scatter',
        data: {
        datasets: [{ 
            data: data_set,
            label: "Result",
            backgroundColor: "#161616",
            borderColor: '#161616',
            fill: false
          }
        ]
        },
        options: {
            title: {
              display: true,
              text: 'Result'
            },
            scales:{
                xAxes: [{
                    type: 'linear',
                    min: 0,
                    max: 1
                }],
                yAxes: [{
                  type: 'linear',
                    min: -30,
                    max: 50  
                }]
            }
        }
        });
	}
} 