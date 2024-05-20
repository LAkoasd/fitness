const exercises = {
    chest: [
        { name: "Push-up", description: "Start in a plank position with your hands under your shoulders. Lower your body until your chest nearly touches the floor. Push back up to the starting position." },
        { name: "Bench Press", description: "Lie on a bench with your feet flat on the floor. Grip the barbell with hands slightly wider than shoulder-width. Lower the bar to your chest and push it back up." },
        { name: "Chest Fly", description: "Lie on a bench with a dumbbell in each hand, arms extended above your chest. Lower the weights out to your sides, keeping a slight bend in your elbows. Bring them back up above your chest." },
        { name: "Dumbbell Press", description: "Lie on a bench with a dumbbell in each hand, arms extended above your chest. Lower the dumbbells to your sides, then press them back up." },
        { name: "Chest Dip", description: "Hold onto parallel bars with your arms straight. Lower your body by bending your elbows until your shoulders are below your elbows. Push back up to the starting position." }
    ],
    legs: [
        { name: "Squat", description: "Stand with feet shoulder-width apart. Lower your hips back and down as if sitting in a chair, keeping your knees behind your toes. Return to standing." },
        { name: "Lunge", description: "Step forward with one leg and lower your hips until both knees are bent at about a 90-degree angle. Push back to the starting position and switch legs." },
        { name: "Leg Press", description: "Sit on the leg press machine with your feet shoulder-width apart on the platform. Push the platform away from you by extending your knees and hips." },
        { name: "Deadlift", description: "Stand with feet hip-width apart, holding a barbell with an overhand grip. Hinge at your hips and lower the bar down the front of your legs. Stand back up by extending your hips and knees." },
        { name: "Leg Curl", description: "Lie face down on the leg curl machine with your ankles under the roller pad. Curl your legs up towards your buttocks, then slowly lower them back down." }
    ],
    arms: [
        { name: "Bicep Curl", description: "Stand with feet shoulder-width apart, holding a dumbbell in each hand. Curl the weights up towards your shoulders, then lower them back down." },
        { name: "Tricep Dip", description: "Sit on the edge of a bench with your hands next to your hips. Slide your butt off the bench and lower your body by bending your elbows. Push back up to the starting position." },
        { name: "Hammer Curl", description: "Stand with feet shoulder-width apart, holding a dumbbell in each hand with palms facing your body. Curl the weights up towards your shoulders, then lower them back down." },
        { name: "Tricep Extension", description: "Hold a dumbbell with both hands above your head, arms extended. Lower the weight behind your head by bending your elbows, then extend your arms back up." },
        { name: "Push-up", description: "Start in a plank position with your hands under your shoulders. Lower your body until your chest nearly touches the floor. Push back up to the starting position." }
    ],
    back: [
        { name: "Pull-up", description: "Hang from a pull-up bar with your hands slightly wider than shoulder-width apart. Pull your body up until your chin is above the bar, then lower back down." },
        { name: "Deadlift", description: "Stand with feet hip-width apart, holding a barbell with an overhand grip. Hinge at your hips and lower the bar down the front of your legs. Stand back up by extending your hips and knees." },
        { name: "Bent-over Row", description: "Hold a barbell with an overhand grip, bend at your hips and knees, and lower your torso until it's nearly parallel to the floor. Pull the barbell to your lower chest, then lower it back down." },
        { name: "Lat Pulldown", description: "Sit at a lat pulldown machine and grasp the bar with a wide grip. Pull the bar down to your chest, then slowly return it to the starting position." },
        { name: "T-Bar Row", description: "Stand over a T-bar row machine, grasp the handles, and bend at your hips and knees. Pull the handles towards your torso, then lower them back down." }
    ],
    shoulders: [
        { name: "Shoulder Press", description: "Sit or stand holding a dumbbell in each hand at shoulder height. Press the weights up overhead until your arms are fully extended, then lower them back down." },
        { name: "Lateral Raise", description: "Stand with feet hip-width apart, holding a dumbbell in each hand at your sides. Raise the weights out to the sides until your arms are parallel to the floor, then lower them back down." },
        { name: "Front Raise", description: "Stand with feet hip-width apart, holding a dumbbell in each hand at your sides. Raise the weights in front of you to shoulder height, then lower them back down." },
        { name: "Reverse Fly", description: "Stand with feet hip-width apart, holding a dumbbell in each hand. Bend at your hips and knees, and raise the weights out to the sides until your arms are parallel to the floor, then lower them back down." },
        { name: "Arnold Press", description: "Sit or stand holding a dumbbell in each hand at shoulder height with palms facing you. Rotate your palms away from you as you press the weights up overhead, then lower them back down while rotating your palms back towards you." }
    ]
};

function findExercises() {
    const bodyPart = document.getElementById('bodyPartInput').value.toLowerCase();
    const resultsDiv = document.getElementById('exerciseResults');
    const backButton = document.getElementById('backButton');
    const bodyPartsList = document.getElementById('bodyPartsList');
    const searchBox = document.querySelector('.search-box');
    const instructions = document.querySelector('p + ul');

    resultsDiv.innerHTML = '';
    bodyPartsList.style.display = 'none';
    searchBox.style.display = 'none';
    instructions.style.display = 'none';
    backButton.style.display = 'block';

    if (exercises[bodyPart]) {
        exercises[bodyPart].forEach(exercise => {
            const exerciseDiv = document.createElement('div');
            exerciseDiv.className = 'exercise';
            exerciseDiv.textContent = exercise.name;
            exerciseDiv.setAttribute('title', exercise.description);
            resultsDiv.appendChild(exerciseDiv);
        });
    } else {
        resultsDiv.textContent = 'No exercises found for that body part. Please try another body part.';
    }
}

function goBack() {
    const resultsDiv = document.getElementById('exerciseResults');
    const backButton = document.getElementById('backButton');
    const bodyPartsList = document.getElementById('bodyPartsList');
    const searchBox = document.querySelector('.search-box');
    const instructions = document.querySelector('p + ul');

    resultsDiv.innerHTML = '';
    bodyPartsList.style.display = 'block';
    searchBox.style.display = 'flex';
    instructions.style.display = 'block';
    backButton.style.display = 'none';
}
