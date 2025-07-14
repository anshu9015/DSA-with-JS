#include<bits/stdc++.h>
using namespace std;

void dfs(int index, int arr[], int n, string s, vector<string>& res){
    if(index == n){
        res.push_back(s);
        return;
    }

    dfs(index + 1, arr, n, s, res);
    s.push_back(arr[index] + '0');
    dfs(index + 1, arr, n, s, res);
    s.pop_back();
    
    
}

int main(){
    int arr[] = {1, 2, 3};

    int n = 3;
    string s = "";
    vector<string> res;

    dfs(0, arr, n, s, res);

    for(auto a : res){
        cout << a << endl;
    }
    cout << res.size() << endl;
}