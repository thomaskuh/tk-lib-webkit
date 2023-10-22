pipeline {
    agent any
    tools {
        jdk "jdk-21"
        maven "maven-3.8"
    }
    triggers {
        pollSCM "H * * * *"
    }
    parameters {
        booleanParam(name: "CLEAN", description: "Clean workspace.", defaultValue: false)
        booleanParam(name: "RELEASE", description: "Release that thang.", defaultValue: false)
    }
    options {
        skipDefaultCheckout(true) // This is required if you want to clean before build
    }
    stages {
        stage('Info') {
            steps {
                echo 'Stage "Info" -> Printing version & environment info.'
                sh 'java -version'
                sh 'mvn -version'
            }
        }
    	stage('Clean') {
        	when {expression { params.RELEASE || params.CLEAN }}    	
    		steps {
    			echo 'Stage "Clean" -> Cleaning workspace.'
    			cleanWs()
    		}
    	}
    	stage("Checkout") {
    		steps {
    			echo 'Stage "Checkout" -> Checkin out.'
    			checkout scm
    		}
    	}
        stage('Snapshot') {
        	when {expression { !params.RELEASE }}        
            steps {
                echo 'Stage "Snapshot" -> Build & Deploy.'
                sh 'mvn clean deploy -DaltDeploymentRepository=nexus.kuhlins.org::default::https://nexus.kuhlins.org/repository/maven-public'
            }
        }
        stage('Release') {
        	when {expression { params.RELEASE }}
            steps {
            	echo 'Stage "Release" -> Build & Deploy.'
                sh 'mvn -B release:prepare release:perform -Darguments=-DaltDeploymentRepository=nexus.kuhlins.org::default::https://nexus.kuhlins.org/repository/maven-public'
            }
        }
    }
}
