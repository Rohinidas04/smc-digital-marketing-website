//Programmer:  John Chapin  email: john.chapin@lcps.org
//Programmer: Chris Schroeder email: chris@4schroeders.com - Modified to use the ISortPanel

public class SelectionSort implements Runnable {
   private int[] sortArray;
   private ISortPanel panel;

   public SelectionSort(int[] anArray, ISortPanel aPanel) {
      sortArray = anArray;
      panel = aPanel;
   }

	
   /* method:  run
    * Precond:  sortArray has been initialized
    * Postcond: sorts array using swapping method by swapping lowest value*/
	// This is the sort routine on sortArray
   public void run() {
   
      //YOU COMPLETE THIS with your sorting algorithm
   
	   //for loop from 0 to length -1
	   for (int a = 0; a < sortArray.length - 1; a++)
	      {
	       //sets minIndex to 0  
		   int minIndex = a;
		   //loop to find minimum value
	         for (int b = a + 1; b < sortArray.length; b++)
	         {
	            //changes value of minIndex if value in sortArray is less than current minIndex value
	        	 if (sortArray[b] < sortArray[minIndex])
	            {
	               minIndex = b;
	            }
	         }
	         //changes values
	         int temp = sortArray[a];
	         sortArray[a] = sortArray[minIndex];
	         sortArray[minIndex] = temp;
	         panel.updateArray(sortArray);   
	         
	         
	       }
	   
	   
	   }
   
   
      /* This is the the last line of code of the outside loop
       This updates the animation after the two elements have been swapped.*/
      
   	
   	
   
}