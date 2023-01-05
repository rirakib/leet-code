function solve24(nums) {
    // list of possible operator combinations
    const ops = ['+', '-', '*', '/'];
  
    // generate all possible combinations of numbers
    const numPermutations = permute(nums);
  
    // try all possible combinations of numbers and operators
    for (const perm of numPermutations) {
      for (const op1 of ops) {
        for (const op2 of ops) {
          for (const op3 of ops) {
            // construct expression using the current combination of numbers and operators
            const expression = `${perm[0]} ${op1} ${perm[1]} ${op2} ${perm[2]} ${op3} ${perm[3]}`;
            // evaluate the expression
            if (eval(expression) === 24) {
              // return the solution if it evaluates to 24
              return expression;
            }
          }
        }
      }
    }
  
    // return null if no solution was found
    return null;
  }
  
  // helper function to generate all possible permutations of an array
  function permute(arr) {
    if (arr.length === 0) {
      return [[]];
    }
  
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      const permutations = permute(remaining);
      for (const perm of permutations) {
        result.push([current].concat(perm));
      }
    }
    return result;
  }

  console.log(solve24('4878'))