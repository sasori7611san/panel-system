#!/bin/sh

aws s3 rm s3://test2-hosting-sasori7611san/ --recursive
aws s3 cp build s3://test2-hosting-sasori7611san/ --recursive