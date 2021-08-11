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
        success {
            mail(from: "abd.falyoun@scandinaviatech.com",
                       to: "falyoun.abdulrahman@gmail.com",
                       subject: "That build passed.",
                       body: "Nothing to see here")
        }
        failure {
            mail(from: "abd.falyoun@scandinaviatech.com",
                   to: "falyoun.abdulrahman@gmail.com",
                   subject: "That build failed!",
                   body: "Nothing to see here")
        }
    }

    // The options directive is for configuration that applies to the whole job.
    options {
        // For example, we'd like to make sure we only keep 10 builds at a time, so
        // we don't fill up our storage!
        buildDiscarder(logRotator(numToKeepStr:'10'))

        // And we'd really like to be sure that this build doesn't hang forever, so
        // let's time it out after an hour.
        timeout(time: 60, unit: 'MINUTES')
    }

}