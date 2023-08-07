#include <stdio.h>

int main(void)
{
    int n = 50;
    int k = 51;
    int t = &n;
    int *p = &n;
    int *q = &k;
    // printf("%p\n", t);
    // printf("%i\n", t);
    printf("%p\n", p);
    printf("%p\n", q);
    // printf("%i\n", p);
}