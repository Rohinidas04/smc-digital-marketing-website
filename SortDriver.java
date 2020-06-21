//Programmer:  Patrick Sliwinski
//John Chapin:  Modified for colors and class lab

import javax.swing.JFrame;

public class SortDriver {

   public static void main(String[] args) {
      JFrame frame = new JFrame("Sorting");
      frame.setExtendedState(JFrame.MAXIMIZED_BOTH);
      frame.setLocation(0, 0);
      frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      frame.setContentPane(new SortPanel());
      frame.setVisible(true);
   }
}
