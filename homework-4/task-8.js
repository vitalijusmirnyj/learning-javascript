/*Rewrite the following expressions using De Morgan’s law:
!(a && b) = !a || !b (this is an example what you should write instead of a question mark)
*/

!(a || b) = !a && !b
!(a && b || c) = !a || !b && !c
!(a || b && c) = !a && !b || !c
!(a || b || c || d) = !a && !b && !c && !d
!(a && b && c && d) = !a || !b || !c || !d
!(!a && !b || c) = a || b && !c
!(!a || b && !c || d && !c) = a && !b || c && !d || c
