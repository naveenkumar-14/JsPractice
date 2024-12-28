import java.util.*;
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int arr[]=new int[nums1.length+nums2.length];
        int mid=arr.length/2;
        for(int i=0;i<nums1.length;i++){
            arr[i]=nums1[i];
        }
        for(int i=0;i<nums2.length;i++){
            arr[i+nums1.length]=nums2[i];
        }
        Arrays.sort(arr);
        if(arr.length%2==0){
            return (arr[mid]+arr[mid-1])/arr.length;
        }else{
            return arr[mid];
        }
        
    }
}