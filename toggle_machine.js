// toggle machine

example_program=[
['O', 1, 1],
['O', 0, 2],
['T', 0, 0, 3],
['T', 0, 'end', 0],
]

run(example_program)

function run(program){
    var current_step_index=0
    while(current_step_index!='end'){
        var step=program[current_step_index]
        if(step[0]=='T'){
            // toggle
            step[1] = 1-step[1]
            current_step_index = step[1]==0 ? step[2] : step[3]
        }else if(step[0]=='O'){
            // output
            console.log(step[1])
            current_step_index = step[2]
        }
    }
}
