pipeline {
    agent any;

    stages {

        stage("build") {
            steps {
                echo "building the application..."
            }
        }

        stage("test") {
            echo "testing the application..."
        }

        stage("deploy") {
            echo "deploying the application..."
        }

    }
    // Runs after all stages
    post {
        always {
            // Always will get executed, fail, pass or whatever
            // Like sending an email
            echo "Always will run"
        }
        failure {
            //
            echo "Failure"
        }
    }

}