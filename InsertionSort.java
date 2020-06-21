//Programmer:  John Chapin  email: john.chapin@lcps.org
//Programmer: Chris Schroeder email: chris@4schroeders.com - Modified to use the ISortPanel

public class InsertionSort implements Runnable {
   private int[] sortArray;
   private ISortPanel panel;

   public InsertionSort(int[] anArray, ISortPanel aPanel) {
      sortArray = anArray;
      panel = aPanel;
   }

	
	//Write a swap helper method
	
	

   /* method:  run
    * Precond:  sortArray has been initialized
    * Postcond: sorts array using swapping method and compares two values*/
    
	// This is the sort routine on sortArray
   public void run() {
   
   //YOU COMPLETE THIS with your sorting algorithm
   
	   
	   //for loop from 1 to length
       for (int b = 1; b < sortArray.length; b++) 
       {  
           //sets temp value to sortArray[b]
    	   int temp = sortArray[b];  
    	   //sets c value to b-1
           int c = b-1;    
           
           while((c > -1) && (sortArray [c] > temp)) 
           {  
               sortArray [c+1] = sortArray[c];  
               c--;  
           }  
           
           sortArray[c+1] = temp;  
           panel.updateArray(sortArray);
       }  
   
   
      /* This is the the last line of code of the outside loop
       This updates the animation after the two elements have been swapped.*/
        

   
   
   	
   	
   }
}