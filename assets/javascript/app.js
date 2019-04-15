
       
     
     
        $(document).ready(function() {

         //When game page loads, a prompt will allow the user to start the timer when they want to. The timer should be set to 60 seconds. If the clock runs out of time, the user loses. 
        
        var timeRemaining = 60
        document.getElementById("timer").innerHTML = "Time Remaining: " + timeRemaining + " seconds";
          alert("You have 60 seconds. Ready to start?");
          timer = setInterval(function() {
            $("#timer").html("Time Remaining: " + timeRemaining-- + " seconds")
            if (timeRemaining === 0) {
              clearInterval(timer);
              alert("Times up!");
              $("#submitbutton").hide();
            }
          }, 1000)
          


         // Users can answer questions by selecting true or false buttons
        // The game will keep track of how many answers are correct, answers incorrect and answers unanswered.
        // The user can click submit before the timer runs out to submit their answers. 
        
        var correct = 0;
        var incorrect = 0;
        var answered = 0;
        
       

    
        

        $("#carquestionporsche").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("Porsche");
          $("#carquestionferrari").hide();
          $("#carquestionBMW").hide();
          $("#carquestionmercedes").hide();
          });
        
          $("#carquestionferrari").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("Ferrari");
          $("#carquestionporsche").hide();
          $("#carquestionBMW").hide();
          $("#carquestionmercedes").hide();
          });

          $("#carquestionBMW").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("BMW");
          $("#carquestionporsche").hide();
          $("#carquestionferrari").hide();
          $("#carquestionmercedes").hide();
          });

          $("#carquestionmercedes").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("Mercedes");
          $("#carquestionporsche").hide();
          $("#carquestionferrari").hide();
          $("#carquestionBMW").hide();
          });

          $("#magquestionpeople").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("People");
          $("#magquestiontime").hide();
          $("#magquestionnationallampoon").hide();
          $("#magquestionmad").hide();
          });

          $("#magquestiontime").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("Time");
          $("#magquestionpeople").hide();
          $("#magquestionnationallampoon").hide();
          $("#magquestionmad").hide();
          });

          $("#magquestionnationallampoon").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("National Lampoon");
          $("#magquestiontime").hide();
          $("#magquestionpeople").hide();
          $("#magquestionmad").hide();
          });

          $("#magquestionmad").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("Mad");
          $("#magquestiontime").hide();
          $("#magquestionnationallampoon").hide();
          $("#magquestionpeople").hide();
          });

          $("#songquestionsixteencandles").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("Sixteen Candles");
          $("#songquestionprettyinpink").hide();
          $("#songquestionbaby").hide();
          $("#songquestioncurlysue").hide();
          });

          $("#songquestionprettyinpink").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("Pretty in Pink");
          $("#songquestionsixteencandles").hide();
          $("#songquestionbaby").hide();
          $("#songquestioncurlysue").hide();
          });

          $("#songquestionbaby").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("She's Having a Baby");
          $("#songquestionsixteencandles").hide();
          $("#songquestionprettyinpink").hide();
          $("#songquestioncurlysue").hide();
          });

          $("#songquestioncurlysue").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("Curly Sue");
          $("#songquestionprettyinpink").hide();
          $("#songquestionbaby").hide();
          $("#songquestionsixteencandles").hide();
          });

          $("#johncandyquestionfive").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("Five");
          $("#johncandyquestionthree").hide();
          $("#johncandyquestioneight").hide();
          $("#johncandyquestiontwo").hide();
          });

          $("#johncandyquestionthree").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("Three");
          $("#johncandyquestionfive").hide();
          $("#johncandyquestioneight").hide();
          $("#johncandyquestiontwo").hide();
          });

          $("#johncandyquestioneight").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("Eight");
          $("#johncandyquestionfive").hide();
          $("#johncandyquestionthree").hide();
          $("#johncandyquestiontwo").hide();
          });

          $("#johncandyquestiontwo").click(function(){
            answered++;
          incorrect++;
          console.log("correct:" + incorrect);
          $(this).text("Two");
          $("#johncandyquestionfive").hide();
          $("#johncandyquestioneight").hide();
          $("#johncandyquestionthree").hide();
          });


        
        $("#ques1true").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("True");
          $("#ques1false").hide();
          });
        
        $("#ques1false").click(function(){
            answered++;
          incorrect++
          console.log("incorrect:" + incorrect);
          $(this).text("False");
          $("#ques1true").hide();
          });
        
        $("#ques2true").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("True");
          $("#ques2false").hide();
          });
        
        $("#ques2false").click(function(){
            answered++;
          incorrect++;
          console.log("incorrect:" + incorrect);
          $(this).text("False");
          $("#ques2true").hide();
          });
        
        $("#ques3true").click(function(){
            answered++;
          incorrect++;
          console.log("incorrect:" + incorrect);
          $(this).text("True");
          $("#ques3false").hide();
          });
        
        $("#ques3false").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("False");
          $("#ques3true").hide();
          });
        
        $("#ques4true").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("True");
          $("#ques4false").hide();
          });
        
        $("#ques4false").click(function(){
            answered++;
          incorrect++;
          console.log("incorrect:" + incorrect);
          $(this).text("False");
          $("#ques4true").hide();
          });
        
        $("#ques5true").click(function(){
            answered++;
          incorrect++;
          console.log("incorrect:" + incorrect);
          $(this).text("True");
          $("#ques5false").hide();
          });
        
        $("#ques5false").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("False");
          $("#ques5true").hide();
          });
        
        $("#ques6true").click(function(){
            answered++;
          incorrect++;
          console.log("incorrect:" + incorrect);
          $(this).text("True");
          $("#ques6false").hide();
          });
        
        $("#ques6false").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("False");
          $("#ques6true").hide();
          });
        
        $("#ques7true").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("True");
          $("#ques7false").hide();
          });
        
        $("#ques7false").click(function(){
            answered++;
          incorrect++;
          console.log("incorrect:" + incorrect);
          $(this).text("False");
          $("#ques7true").hide();
          });
        
        $("#ques8true").click(function(){
            answered++;
          incorrect++;
          console.log("incorrect:" + incorrect);
          $(this).text("True");
          $("#ques8false").hide();
          });
        
        $("#ques8false").click(function(){
            answered++;
          correct++;
          console.log("correct:" + correct);
          $(this).text("False");
          $("#ques8true").hide();
          });

// Page will keep track of whether the user has answered all questions. If not all questions have been answered, an alert pops up
          $("#submitbutton").click(function(){
            if (answered === 11) {
                alert("You forgot to answer 1 question!");
            }
            else if (answered === 10){
                alert("You forgot to answer 2 questions!");
            }
            else if (answered === 9) {
                alert("You forgot to answer 3 questions!");
            }
            else if (answered === 8) {
                alert("You forgot to answer 4 questions!");
            }
            else if (answered === 7) {
                alert("You forgot to answer 5 questions!");
            }

            else if (answered === 6) {
                alert("You forgot to answer 6 questions!");
            }

            else if (answered === 5) {
                alert("You forgot to answer 7 questions!");
            }

            else if (answered === 4) {
                alert("You forgot to answer 8 questions!");
            }

            else if (answered === 3) {
                alert("You forgot to answer 9 questions!");
            }

            else if (answered === 2) {
                alert("You forgot to answer 10 questions!");
            }

            else if (answered === 1) {
                alert("You forgot to answer 11 questions!");
            }

            else if (answered === 0) {
                alert("Boo! You didn't make any guesses!")
            }
            else if (answered === 12) {
              //function showResults (){
              //  window.open("https://jenivy06.github.io/triviagame/results.html"); 
              //}
              alert("Thanks for playing! Here are your results. Correct: " + correct + " Incorrect: " + incorrect);
              
             // function showResults (){
            //    document.getElementById("#correct").innerHTML = "Correct: " + correct;
             //   document.getElementById("#incorrect").innerHTML = "Correct: " + incorrect;
            //  }
              
              // function displayResults()
            //    $('#correct').append()
              // function showResults(){
             //   $("#correct").text("Correct: ") + correct;
              //  $("#incorrect").text("Incorrect: ") + incorrect;
             // }
            }

          //  var correctTally = correct;
          //  console.log(correctTally);
             //  document.getElementById("correct").innerHTML = "Correct: " + correct;
            //   document.getElementById("incorrect").innerHTML = "Incorrect: " + incorrect;
            //    $("#timer").text("Time remaining: ");
             //   alert("Thanks for playing! Here are your results. " + "Correct: " + correct + " Incorrect: " + incorrect);
                
                
            
          })

        });

        