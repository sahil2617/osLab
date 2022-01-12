    // Operating system practical :- Sahil shaikh 212010021
   // Function to find the waiting time for all
  // processes
    function findWaitingTime(processes,n,burstTime,waitingTime)
    {
        // waiting time for first process is 0
        waitingTime[0] = 0;
   
        // calculating waiting time
        for (let i = 1; i < n; i++) {
            // below line is the formula for calculating waiting time i.e waiting time = burstTime + waitingTime of previous process
            waitingTime[i] = burstTime[i - 1] + waitingTime[i - 1];
        }
    }
     
    function findTurnAroundTime(processes,n,burstTime,waitingTime,turnAroundTime)
    {
        // calculating turnaround time by adding
        // burstTime[i] + waitingTime[i]
        for (let i = 0; i < n; i++) {
            // below is the formula for turn around time i.e turnAroundTime = burstTime+ waitingTime 
            turnAroundTime[i] = burstTime[i] + waitingTime[i];
        }
    }
     
    function findavgTime(processes,n,burstTime)
    {
        let waitingTime = new Array(n), turnAroundTime = new Array(n);
        for(let i=0;i<n;i++)
        {
            waitingTime[i]=0;
            turnAroundTime[i]=0;
        }
        let total_waitingTime = 0, total_turnAroundTime = 0;
   
        //Function to find waiting time of all processes
        findWaitingTime(processes, n, burstTime, waitingTime);
   
        //Function to find turn around time for all processes
        findTurnAroundTime(processes, n, burstTime, waitingTime, turnAroundTime);
   
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
                        <td>${burstTime[i]}</td>
                        <td>${waitingTime[i]}</td>
                        <td>${turnAroundTime[i]}</td>
                    </tr>`;
           
        }
        tBody.innerHTML = html; 
        let s = total_waitingTime / n;
        let t = Math.floor(total_turnAroundTime / n);
        document.getElementById('AwaitingTime').innerText = "Average waiting time = "+ s;
        document.getElementById('AturnAroundTime').innerText = "Average turn around time = "+ t;
        
    }
     
    let processes=[1,2,3,4,5,6,7];
    let  n = processes.length;
    let burstTime=[10,5,100,6,4,3,9];

    findavgTime(processes, n, burstTime);
     
    
     
