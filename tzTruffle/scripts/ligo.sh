#! /bin/sh
# 
# . ligo.sh or source ligo.sh
#

alias ligo='docker run --rm -v "$PWD":"$PWD" -w "$PWD" ligolang/ligo:0.21.0'
