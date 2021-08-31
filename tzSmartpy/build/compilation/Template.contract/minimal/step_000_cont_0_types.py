import smartpy as sp

tstorage = sp.TRecord(value = sp.TNat).layout("value")
tparameter = sp.TVariant(ep = sp.TNat).layout("ep")
tglobals = { }
tviews = { }
