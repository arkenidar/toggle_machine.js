// toggle machine

example_program=[
['O', 1, 1],
['O', 0, 2],
['T', 0, 0, 3],
['T', 0, 'end', 0],
]

example_program_looping=[
['O', 1, 1],
['O', 0, 2],
['T', 0, 0, 3],
['T', 0, 0, 0],
]

example_program_looping_simple=[
['O', 1, 1],
['T', 0, 1, 0],
]

run(example_program_looping_simple)

function run(program){
    var current_step_index=0
    var history=[]
    while(current_step_index!='end'){

        // detection of "infinite looping"
        var snapshot=JSON.stringify([current_step_index, program])
        if(history.indexOf(snapshot)==-1){
            history.push(snapshot)
        }else{
            console.log('infinite looping was detected')
            return
        }

        // execute a step of the program
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
