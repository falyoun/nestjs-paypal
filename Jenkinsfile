pipeline {
    agent any

    stages {

        stage("build") {
            steps {
                echo "building the application..."
            }
        }

        stage("test") {
            steps {
                echo "testing the application..."
            }
        }

        stage("deploy") {
            steps {
                echo "deploying the application..."
            }
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