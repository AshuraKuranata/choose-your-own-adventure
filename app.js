const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(" ")
console.log(`Welcome ${username}.  You are the captain of an investigation squad sent to Kor-poron to investigate the disappearance of the previously sent exploration team.
The exploration team has not responded back for the last four cycles and command is sending your squad to find them.`);
console.log(" ")
console.log("During this adventure, you will be prompted to make choices.  When directed, input text within the [] for accurate results.")
console.log(" ")
console.log("As you prepare your selection, High Command recommends that you bring at least one piece of navigation equipment.")
console.log(" ")
const equipmentOne = prompt("Select your team's equipment (type text in []): [las gun] [hover bikes] [translator] [scanner] [rations] : ");
const equipmentTwo = prompt(`${equipmentOne} selected. Please select a second item: `);
console.log(`${equipmentTwo} selected.`);
console.log(" ")
console.log("You touch-down at the drop-zone. You're immediately hit by the blast of warm, humid air from the atmospheric difference between the shuttle and planet.");;
console.log("Upon exiting the shuttle, you see the ruins of the exploration team's site.");
console.log(" ")

if (equipmentOne === 'scanner' || equipmentTwo === 'scanner') {
    console.log("Your scanner picks up on life-forms in the ruins.");
    console.log(" ")
    const encounterAliens = prompt('Do you wish to approach the life-forms? [y] [n] ');
    console.log(" ")
    if (encounterAliens == 'y') {
        console.log("You follow the signals to the life forms and see the aliens surrounding the exploration team. ");
        if (equipmentOne === 'las gun' || equipmentTwo === 'las gun') {
            console.log(" ")
            const fightAliens = prompt("Do you wish to attack the aliens? [y] [n] ");
            if (fightAliens == 'y') {
                console.log(" ")
                console.log("You fight against the aliens holding the exploration team hostage and are able to successfully rescue the exploration team. Congratulations! You Win!");
                process.exit();
            } else {
                console.log(" ")
                console.log("As you approach the aliens, they shout something that you do not understand.  As you are trying to understand what they are saying, the aliens open fire and you and your team are killed.  Game Over.");
                process.exit();
            }
        } else if (equipmentOne === 'translator' || equipmentTwo === 'translator') {
            console.log(" ")
            console.log("As your team approaches, you are able to pick up on what the aliens are saying: ");
            console.log("'Your kind have stolen our children from us.  Return our offspring at once!'");
            console.log(" ")
            const returnOffspring = prompt('Do you accept the terms? [y] [n] ');
            if (returnOffspring == 'y') {
                console.log(" ")
                console.log("You tell off the exploration team and have them return the alien's offspring.  The aliens give you their thanks and let you leave in peace.");
                console.log("Congratulations! You Win!");
                process.exit()
            } else {
                console.log(" ")
                console.log("You try to negotiate with the aliens. 'No negotiations! Kill them all!' The aliens open fire and kill your team off. ");
                console.log("Game Over.");
                process.exit()
            }
        } else {
            console.log(" ")
            console.log("Unfortunately, your team is ill-equipped to handle an alien encounter, and your team is wiped out by the aliens.  Game Over.");
            process.exit()
        }
    } else{
        console.log(" ")
        console.log("As your team plans what to do next, you are shot in the back.  As you fall and your vision dims, you see the aliens ambushed and killed off the rest of your team.  Game Over.");
        process.exit()
    }
} else {
    console.log('Your initial search of the site yields no signs of the exploration team itself.  You notice two set of tracks headed to a mountain range and towards a jungle. ')
    console.log(" ")
    if (equipmentOne === 'hover bikes' || equipmentTwo === 'hover bikes') {
        const mountRange = prompt('Choose: [m] to head to mountains, [j] to head to jungle: ')
        if (mountRange === 'm') {
            console.log(" ")
            console.log("Your team approaches the mountain range, and on the way, you see a convoy of aliens with the missing exploration team held captive.");
            console.log(" ")
            if (equipmentOne === 'las gun' || equipmentTwo === 'las gun') {
                const fightAliens = prompt("Do you wish to attack the aliens directly or ambush them? [dir] to directly attack or [amb] to set up an ambush: ")
                if (fightAliens == 'amb') {
                    console.log(" ")
                    console.log("You set up an ambush on the alien convoy and successfully rescue the exploration team. Congratulations! You Win!");
                    process.exit();
                } else if (fightAliens == 'dir') {
                    console.log(" ")
                    console.log("You try to directly attack the aliens, but their forces are too great for your team to overcome.");
                    console.log("You and your team are defeated and taken as prisoners.  Game Over.")
                    process.exit();
                } else {
                    console.log(" ")
                    console.log("As you stutter your commands, the aliens notice your team and they force you into submission and are taken prisoner.  Game Over.");
                    process.exit();
                }
            } else {
                console.log(" ")
                console.log("Unfortunately, your team is ill-equipped to handle dealing with a hostile force at this time carrying the captives.  While you're able to report back to command, the exploration team was never heard from again.  Game Over.");
                process.exit();
            }
        } else if (mountRange === 'j') {
            console.log(" ")
            console.log("You head into the jungle and notice that the tracks lead deep into the forest.  At the end of the tracks,");
            console.log("you find a series of cocoons in the tree-line that you suspect are the exploration team.");
            console.log(" ")
            if (equipmentOne === 'translator' || equipmentTwo === 'translator') {
                console.log("You hear from your translators: 'Hey!'  You turn and see a small furry creature watching you and beckoning.  'I saw the other lanky beings captured by the Ooo-to-krus.  If you follow me, we can rescue everyone captured!'")
                const alienHelp = prompt('Do you wish to follow their instructions? [y] [n]: ')
                if (alienHelp == 'y') {
                    console.log("'Great! My people will distract the Ooo-to-krus away.  When we do so, make sure you first make a loud noise to scare the It-ti-chuks away first before you try to open the cocoons!'");
                    console.log(" ")
                    console.log("You see the furry being quickly climb away, and shortly after, a grunting and flurry of movement is seen in the treeline.")
                    console.log("You catch glimpses of the aliens at odds with one another, and in a short while, the clearing seems clear.")
                    console.log(" ")
                    const followIns = prompt('Do you make noise first, or try to open the cocoons while the coast is clear? [n] to make noise, [o] to open the cocoons: ')
                    if (followIns == 'n') {
                        console.log(" ")
                        console.log("You follow the alien's instructions and in doing so you see strange bugs disperse that were camouflaged on the cocoons.");
                        console.log("After the bugs disperse, your team quickly opens and gets the captives out and escape.");
                        console.log(" ")
                        console.log("You meet up later with the aliens and after resting with their tribe, set up diplomatic relations that help foster positive relations with these people.")
                        console.log("Congratulations, you win!");
                        process.exit();
                    }   else {
                        console.log(" ")
                        console.log("Dismissing the alien's warnings, you try to open the cocoons and escape.  However, as your team tries to open the cocoons, you feel a strange crawling sensation and pricks on your skin.  Small bugs swarm over your bodies as you fall helplessly to the ground, paralyzed until the Ooo-to-krus return and silence you forever.  Game Over.");
                        process.exit()
                    }
                } else {
                    console.log("'Suit yourself.' The furry being runs away.  You try to formulate a plan with your team, but as you do so, you feel a sting and you begin to get droopy.");
                    console.log("Before your eyes close forever, you feel yourself being picked up and wrapped in a sticky substance.  Game Over.")
                    process.exit()
                }

            } else if (equipmentOne === 'las gun' || equipmentTwo === 'las gun') {
                console.log("You see large alien beings in the treeline, but seemingly unmoving at this time.")
                const fightAliens = prompt("Do you wish to attack the aliens? [y] [n] ")
                if (fightAliens == 'y') {
                    console.log("You attack the large aliens with your las guns and approach the cocoons.  However, as your team tries to open the cocoons, you feel a strange crawling sensation and pricks on your skin.  Small bugs swarm over your bodies as you fall helplessly to the ground, paralyzed until the large aliens return and silence you forever.  Game Over. ")
                    process.exit()
                } else {
                    console.log("Your team tries to steathily approach the aliens, but as you approach the cocoons, you feel a strange crawling sensation and pricks on your skin.")
                    console.log("Small bugs swarm over your bodies as you fall helplessly to the ground, paralyzed until the large aliens awaken and silence you forever.  Game Over.")
                    process.exit()
                }
            } else if (equipmentOne === 'rations' || equipmentTwo === 'rations') {
                console.log("You realize that these aliens might be hunting, and with the rations your team brought you might be able to lure them away.");
                console.log("You can either set the rations far away or try to use a team member as bait with the rations to lure the aliens away.");
                console.log(" ")
                const baitTrap = prompt("Which do you choose? [b] to have team member be bait or [t] to set a trap for the aliens: ")
                if (baitTrap == 'b') {
                    console.log(" ")
                    console.log("Your team loads up one of the hover bikes and goes through the clearing.  Immediately, the aliens spring up and chase the bike away.")
                    console.log("While gone, your team approaches the cocoons and successfully get the people out.");
                    console.log("Your team successfully exits the forest with the exploration team, but the team member was never seen again.");
                    console.log(" ")
                    console.log("Congratulations! Try to succeed without losing a team member next time.");
                    process.exit();
                } else {
                    console.log(" ")
                    console.log("Your team sets a trap with the rations, and wait for the aliens to move.  While doing so, you feel some pricks on your skin and suddenly feel drowsy.  Before your eyes close forever, you feel yourself being picked up and wrapped in a sticky substance.  Game Over.");
                    process.exit();
                    }
                }
            } else {
            console.log("Your team doesn't understand your unintelligible notation and decides to go on their own without you.  Game Over.")
            process.exit()
            }
        } else {
            console.log("Upon seeing the distances that are required to traverse, you realize that there will be no way for your team to catch up to the tracks.  You head back to the shuttle to report to high command to resend a team.  Try again!");
            process.exit()
            }
        }