/* Class ArrayListTest
*  Practicing the use of ArrayList methods
*  by manipulating an ArrayList of intergers
*/

import java.util.ArrayList;
import java.util.Scanner;


public class ArrayListTester
{
  
   //Main method 
   public static void main(String[] args)
   {
    //instantiate Scanner object
      Scanner keyboard = new Scanner(System.in);
      //invoke the printMenu method (defined below)
      
      //instantiate ArrayListObject object
      ArrayListObject list = new ArrayListObject();
      
      printMenu();
      //allow user to type in menu choice
      int choice = keyboard.nextInt();
      //continue to invoke correct method based on user's choice (user enters 0 to quit)
      while (choice >= 0)
      {
      //invoke dipatch method (defined below) and send user's choice
         switch(choice)
         {
            case 0: //program ends
               System.out.println("Bye!");
               System.exit(0);
               break;
            case 1: //Count evens
               list.populateArray(20, 0);
               list.printArray("new(0-19)");
               int cntEvens = list.countEvens();      
               System.out.println("cnt evens " + cntEvens);
               System.out.println();
               break;
            case 2: //remove odds
               list.populateArray(15, 1);
               list.printArray("new(1-15)");
               list.removeOdds();
               list.printArray("rmv odds");
               System.out.println();
               break;
            case 3: //No duplicate values with number range 1-4
            	list.populateArray(4, 1);
            	list.printArray("new(1-4)");
            	list.noDuplicateValues();
            	list.printArray("no duplicate values");
            	System.out.println();
            	break;
            case 4: //No duplicate values with number range 1-2
            	list.populateArray(2, 1);
            	list.printArray("new(1-2)");
            	list.noDuplicateValues();
            	list.printArray("no duplicate values");
            	System.out.println();
            	break;
            case 5: //Make123 with number range 1-2 only
            	list.populateArray(2, 1);
            	list.printArray("new(1-2)");
            	list.make123();
            	list.printArray("inserts 3 if 1, 2 pattern found");
            	System.out.println();
            	break;
            case 6: //Make123 with number range 1-2 only
            	list.populateArray(5, 1);
            	list.printArray("new(1-2)");
            	list.removeConsecutiveValue();
            	list.printArray("rmv consecutive values");
            	System.out.println();
            	break;
            case 7:     //linear search values 1-10
                list.populateArray(10, 1);
                list.printArray("new(1-10)");
                System.out.println("What number would you like to search for?");
                  int num = keyboard.nextInt();
                  int index = list.linearSearch(num);
                  System.out.println(num + " exists at index " + index);
                  break;
           case 8:     //binary search values 1-10
                  list.populateArray(10, 1);
                  list.printArray("new(1-10)");
                  System.out.println("What number would you like to search for?");
                  num = keyboard.nextInt();
                  index = list.binarySearch(num);
                  System.out.println(num + " exists at index " + index);
                  break;
            default: //always last in case invalid # entered by user
               System.out.println("Sorry, invalid choice");
               break;
         }
      //print menu again   
         printMenu();
      //allow user to again type in menu choice   
         choice = keyboard.nextInt();
      
      }
   
   }

 //-------------------------------------------------------
 // Print the menu of user's choices
 //-------------------------------------------------------
   public static void printMenu()
   {
   //Lab19
      System.out.println("\n   Menu   ");
      System.out.println("   ====");
      System.out.println("0: Quit");
      System.out.println("1: Count even numbers in the Integer ArrayList");
      System.out.println("2: Remove odd numbers from the Integer ArrayList");
      System.out.println("3: No duplicate values with number range 1-4");
      System.out.println("4: No duplicate values with number range 1-2");
      System.out.println("5: Make123 with number range 1-2 only");
      System.out.println("6: Remove consecutive values with number range 1-5");
      System.out.println("7: Returns index of first occurrence of target and its count using linear search");
      System.out.println("8: Returns index of first occurrence of target and its count using binary search");
      
   
   
      //Last option allows them to continue with another menu item
      System.out.print("\nEnter your choice: ");
   }

}
