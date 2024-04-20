pipeline {
    agent any

    environment {
        NER_VERSION = '1.5.0'
    }

    stages {
        stage("build") {
            steps {
                echo "building the application..."

                nodejs('Node-18.20.1') {
                    sh 'npm install'
                }
            }
        }

        stage("test") {
            steps {
                echo "testing the application..."

                nodejs('Node-18.20.1') {
                    sh 'npm run test'
                }
            }
        }

        stage("deploy") {
            steps {
                echo "testing the application..."
            }
        }
    }
}