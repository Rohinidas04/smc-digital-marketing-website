/* Class ArrayListTest
*  Practicing the use of ArrayList methods
*  by manipulating an ArrayList of intergers
*/

import java.util.ArrayList;
import java.util.Collections;


public class ArrayListObject
{
//create an Integer ArrayList
   private ArrayList<Integer> iArray;

//constructor
   public ArrayListObject()
   {
      iArray = new ArrayList<Integer>();
   }
//METHODS 
       
   /* method:  populateArray
   * Precond:  iArray has been initialized
   * Postcond: Clear any values already inside of iArray. 
   *           Then repopulate iArray with random numbers 
               within the specified offset and range.    
   */
   public void populateArray(int range, int offset)
   {
   
      iArray.clear();
      for (int k=0; k<12; k++)
      {
         int temp = (int)(Math.random()*range + offset);
         iArray.add(temp);
      } 
      
      Collections.sort(iArray);
     
   }
   

   /* method:  printArray
   * Precond:  iArray has been initialized
   * Postcond: displays the contents of the ArrayList<Integer> iArray
   */
   public  void printArray (String msg)
   {
   //print msg argument
      System.out.print(msg + ": ");
   //enhanced for loop to cycle through & print all values in array   
      for(Integer k : iArray)
         System.out.print(k + ", ");
   
      System.out.println(" ");
   }
     

   /* method:  countEvens
   * Precond:  iArray has been initialized
   * Postcond: Count all elements in iArray with even values.
   * Note: YOU MUST USE AN ENHANCED FOR LOOP FOR FULL POINTS  
   *****SAMPLE OUTPUT*****    
   * countEvens({1, 6, 2, 3, 5, 4, 2}) => 4
   */
   public int countEvens()
   {
	   int count = 0;
    //YOU COMMENT and CODE :) 
	   for(Integer a: iArray)
	   {
		   if(a%2 == 0)
		   {
			   count = count + 1;
		   }
	   }
    
      return count; //this will change, currently here to prevent error
   
   }
          
   /* method:  removeOdds
   * Precond:  iArray has been initialized
   * Postcond: Remove all elements in iArray with odd values.  
   * Note:     when removing elements within a for loop, 
   *           be careful with the index; use remove(index)
   *****SAMPLE OUTPUT*****      
   *removeOdds({1, 6, 2, 3, 5, 4, 2}) => {6, 2, 4, 2}
   */
   public void removeOdds()
   {
     //YOU COMMENT and CODE :) 
	   for(int x = 0; x < iArray.size(); x++)
	   {
		   if(iArray.get(x) % 2 == 1)
		   {
			   iArray.remove(x);
			   x--;
		   }
			   
	   }
   
   }
     
     
   /* method:  noDuplicateValues
   * Precond:  iArray has been initialized
   * Postcond: Look for elements in iArray with duplicate values 
   *           (2 of the same value in a row). For duplicates, modify 
   *           the 2nd element by subtracting 5 if it's even, or adding 
   *           5 if it's odd.
   * Note:     use get(index) and set(index, element) 
   *****SAMPLE OUTPUT*****   
   * noDuplicateValues({2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2}) 
                    => {2, 1, 2, 1, 6, 1, 2, 1, 2, -3, 2, -3}
   */
   public void noDuplicateValues()
   {
      //YOU COMMENT and CODE :) 
	   for(int x = 1; x < iArray.size(); x++)
	   {
		   if(iArray.get(x) == iArray.get(x-1))
		   {
			   if(iArray.get(x)%2 == 0)
			   {
				   iArray.set(x, iArray.get(x) -5);
			   }
			   
			   else
			   {
				   iArray.set(x, iArray.get(x) + 5);
			   }
		   }
			   
	   }
	   
   
   }
     
     
   /* method:  make123
   * Precond:  iArray has been initialized
   * Postcond: Look for a pattern of 1,2 in iArray.  
      *        If found, insert the number 3 into the next element 
   * Note:     use get(index) and add(index, element) 
   *****SAMPLE OUTPUT*****      
   * make123({1, 2, 1, 1, 2, 2}) => {1, 2, 3, 1, 1, 2, 3, 2}
   */
   public void make123()
   {
       //YOU COMMENT and CODE :) 
	   for(int x = 1; x < iArray.size(); x++)
	   {
		   if((iArray.get(x) == 1 &&  iArray.get(x-1) == 2) ||(iArray.get(x) == 2 &&  iArray.get(x-1) == 1) )
		   {
			   iArray.add(x + 1, 3);
		   }
			   
	   }
	  
   
   }
     
     
   /* method:  removeConsecutiveValue
   * Precond:  iArray has been initialized
   * Postcond: Look for elements with consecutive values in iArray.  
   *           If found, remove both elements 
   * Note:     use get(index) and remove(index)
   *****SAMPLE OUTPUT*****     
   * removeConsecutiveValue({1, 2, 3, 8, 5, 6, 9}) => {3, 8, 9}
   */
   public void removeConsecutiveValue()
   {
     //YOU COMMENT and CODE :) 
	   
	   for(int x = 1; x < iArray.size(); x++)
	   {
		   if(iArray.get(x) == (iArray.get(x-1)) + 1)
		   {
			   iArray.remove(x);
			   iArray.remove(x-1);
		   }
			   
	   }
         
        
   }
   
   /* method:  linearSearch
   * Precond:  iArray has been initialized
   * Postcond: Start at begining of list, search for target,
               return index of 1st occurrence of target or -1 (if not    
               found) Count & print how many elements were examined total.*/
   
   
   public int linearSearch(int target)
   {
	   //sets count and location to 0
	   int count = 0;
	   int location = 0;
	   //loop to determine count and location
	   for(int x = 0; x < iArray.size(); x++)
	   {
		   
		   //increments count if values dont match
		   if(iArray.get(x) != target)
		   {
			   count = count + 1;
		   }
		   
		   //increments count and determines location if values match
		   else
		   {
			   count = count + 1;
			   location = x;
			   System.out.println(count + " elements tested {" + x + "}");
			   return location;  
		   }
		   
		  
		
		  
	   }
	   
	   
	   
	   System.out.println(count + " elements tested{ -1 }");
	  
	   
	   return -1;
   }
   
   
   /* method:  binarySearch
   * Precond:  iArray has been initialized and is sorted
   * Postcond: Start at middle of list, search for target,
               if not target, see if target is < middle
               if it is, repeat from 0-middle-1, else repeat
               from middle+1 to end. Return -1 if not found. Count & print 
               how many elements were examined total.*/
   

   
   public int binarySearch(int target)  {
	   //sets start, end, and count values 
	   int start = 0;
	    int end = iArray.size() -1;              
	    int count = 0;
	    
	    while(start <= end)
	    {
	    	//determines middle value index
	    	int middle = (start + end)/2;
	    	//increments count and returns index if values are equal
	    	if(iArray.get(middle) == target)
	    	{
	    		count = count + 1;
	    		 System.out.println(count + " elements tested {" + middle + "}");
	    		return middle;
	    	}
	    	
	    	//increments count and provides new start value target is greater
	    	else if(iArray.get(middle) < target)
	    	{
	    		count = count + 1;
	    		start = middle + 1;
	    	}
	    	//increments count and provides new end value target is lesser
	    	else
	    	{
	    		count = count + 1;
	    		end = middle - 1;
	    	}
	    }
	    
	    //returns -1 if value not found
	    System.out.println(count + " elements tested {-1}");
	    return -1;
	}
   
} 



