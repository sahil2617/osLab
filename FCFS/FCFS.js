    // Operating system practical :- Sahil shaikh 212010021
   // Function to find the waiting time for all
  // processes
    function findWaitingTime(arrivalTime,n,burstTime,waitingTime)
    {
        // waiting time for first process is 0
        waitingTime[0] = 0;
   
        // calculating waiting time
        for (let i = 1; i < n; i++) {
            // below line is the formula for calculating waiting time i.e waiting time = burstTime + waitingTime of previous process
            waitingTime[i] = burstTime[i - 1] + waitingTime[i - 1];
        }
    }
     
    function findTurnAroundTime(arrivalTime,n,burstTime,waitingTime,turnAroundTime)
    {
        // calculating turnaround time by adding
        // burstTime[i] + waitingTime[i]
        for (let i = 0; i < n; i++) {
            // below is the formula for turn around time i.e turnAroundTime = burstTime+ waitingTime 
            turnAroundTime[i] = burstTime[i] + waitingTime[i];
        }
    }
    function findCompletionTime(arrivalTime,n,turnAroundTime,completionTime)
    {
        // calculating turnaround time by adding
        // burstTime[i] + waitingTime[i]
        for (let i = 0; i < n; i++) {
            // below is the formula for turn around time i.e turnAroundTime = burstTime+ waitingTime 
            completionTime[i] = arrivalTime[i] + turnAroundTime[i];
        }
    }
     
    function findavgTime(arrivalTime,n,burstTime)
    {
        let waitingTime = new Array(n), turnAroundTime = new Array(n) ,completionTime = new Array(n);
        for(let i=0;i<n;i++)
        {
            waitingTime[i]=0;
            turnAroundTime[i]=0;
        }
        let total_waitingTime = 0, total_turnAroundTime = 0;
        
        //Function to find waiting time of all processes
        findWaitingTime(arrivalTime, n, burstTime, waitingTime);
   
        //Function to find turn around time for all processes
        findTurnAroundTime(arrivalTime, n, burstTime, waitingTime, turnAroundTime);

        findCompletionTime(arrivalTime, n , turnAroundTime,completionTime);

        //
   
        //Display processes along with all details
    
        // Calculate total waiting time and total turn
        // around time
        let tBody = document.getElementById('tBody');
        let html = '';
        for (let i = 0; i < n; i++) {
            total_waitingTime = total_waitingTime + waitingTime[i];
            total_turnAroundTime = total_turnAroundTime + turnAroundTime[i];
            
            html += ` <tr>
                        <th scope="row">${(i + 1)}</th>
                        <td>${arrivalTime[i]}</td>
                        <td>${burstTime[i]}</td>
                        <td>${waitingTime[i]}</td>
                        <td>${turnAroundTime[i]}</td>
                        <td>${completionTime[i]}</td>
                        
                    </tr>`;
           
        }
        tBody.innerHTML = html; 
        let s = total_waitingTime / n;
        let t = Math.floor(total_turnAroundTime / n);
        document.getElementById('AWT').innerText = "Average waiting time = "+ s;
        document.getElementById('ATAT').innerText = "Average turn around time = "+ t;
        
    }
     
    let arrivalTime = [0,2,3,3,5,8,11];
    let  n = arrivalTime.length;
    let burstTime=[10,5,6,6,4,3,9];

    findavgTime(arrivalTime, n, burstTime);
     
   
    
    
    
    
    