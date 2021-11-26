
function fibonacci() {
        document.write("Fibonacci series till 20 is: ");
        var n1 = 0, n2 = 1, next_num, i;
        for (i = 0; i <= 20; i++) {
            document.write(n1 + ",");
            next_num = n1 + n2;
            n1 = n2;
            n2 = next_num;
        }
    }
