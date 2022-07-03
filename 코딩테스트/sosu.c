#include <stdio.h>
 
int main()
{
    int num, i;
    scanf ("%d", &num);
    for (i=2; i<num; i++) {
            printf ("%d %% %d = %d\n",num,i,num%i);
            if (num % i == 0)
               break;
    }
    if ( i == num )
        printf ("소수 입니다.");
    else 
        printf ("소수가 아닙니다.");
 }