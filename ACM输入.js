const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',function(line){
    const input = line.split(' ')
})

// 处理多行
let inputLines = []; // 存储输入的多行字符串

// 逐行读取输入
rl.on('line', (input) => {
  inputLines.push(input); // 将每行输入添加到数组中
});

// 处理输入结束
rl.on('close', () => {
  const multiLineString = inputLines.join('\n'); // 将多行字符串拼接起来
  // 在这里进行多行字符串的处理
  // 输出结果
  console.log(multiLineString);
});