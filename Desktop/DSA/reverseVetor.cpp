#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
int main() {
int n,b;
vector<int>v1;
cout <<"Enter size  :";
  cin>>n;
  cout <<"Enter values \n ";
  for (int i=0;i<=n-1;i++){
      //  cout<<i;
       cin>>b;
        v1.push_back(b);
      }
      // reverse print 
       for (int p=n-1;p>=0;p--){
      //  cout<<p;
        cout<<v1[p] <<"\n" ;
      }
      return 0;
}