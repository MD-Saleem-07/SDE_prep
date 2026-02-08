import java.util.Scanner;
public class alphatriangle {

        public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("enter the value of n");
        int n=sc.nextInt();
        for (int i=1;i<=n;i++){
            char a=(char)(96+n);
            for(int j=1;j<=n*2-1;j++){
                if(i+j<=n+1 || j-i>=n-1){

                    System.out.print(a);
                }
                else{
                    System.out.print(" ");
                }
               if(j<n){
                a--;
               }
               else{
                a++;
               }
            // System.out.print("*");
            }
            System.out.println("");
        }
    }
    
}








    


    


    






    

