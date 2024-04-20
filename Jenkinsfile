def gv

pipeline {
    agent any

    environment {
        NER_VERSION = '1.5.0'
    }

    stages {
        stage("Init") {
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }

        stage("build") {
            steps {
                echo "building the application..."

                nodejs('Node-18.20.1') {
                    sh 'npm install'
                }

                script {
                    gv.buildApp()
                }
            }
        }

        stage("test") {
            steps {
                echo "testing the application..."

                nodejs('Node-18.20.1') {
                    sh 'npm run test'
                }

                script {
                    gv.testApp()
                }
            }
        }

        stage("deploy") {
            steps {
                echo "deploying the application..."

                script {
                    gv.deployApp()
                }
            }
        }
    }
}